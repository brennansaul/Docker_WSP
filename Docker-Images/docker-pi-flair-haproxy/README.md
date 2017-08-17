# Raspberry Pi HAProxy 

## Overview
Docker image that when run creates a networking load balancer for all servers defined in the haproxy.cfg file.

- Base Image: [arm32v7/haproxy](https://hub.docker.com/r/arm32v7/haproxy/) 

## Files

- `Dockerfile`
- `haproxycfg` # This is the file you will need to customize 
- `README.md`

## Exposed ports

- 80

## Volumes 

- n/a

## Environment Variables 

- n/a

## How to: Configure, Build, Run, and Use the flairhaproxy Image

1. Clone this github repo & delete all folders except `docker-flairhaproxy`
2. In `docker-rpi-flairhaproxy` edit`haproxy.cfg` by updating the name, ip address, port for the servers and add more servers if neccessary.
    
    Section of `haproxy.cfg` that you will edit:
    
       listen stats
           bind 0.0.0.0:80 # This is the page you will access
           mode http
           stats enable
           stats uri /haproxy?stats
           stats realm Strictly\ Private
           stats auth A_Username:user
           stats auth Another_User:password
           balance roundrobin # Defines our balancing algorithm as round robin.
           option httpclose
           option forwardfor
           server pi-manager <ip address>:2500 check # Docker node
           server pi-worker1 <ip address>:2500 check # Docker node
           server pi-worker2 <ip address>:2500 check # Docker node
           server pi-worker3 <ip address>:2500 check # Docker node
           # Add more docker nodes here

3. Build HAProxy image
         
        $ cd <directory with files>
        $ docker build -t swarm-haproxy .

4. Test image

	     $ docker run -it --rm --name haproxy-syntax-check pi-haproxy haproxy -c -f /usr/local/etc/haproxy/haproxy.cfg
           
5. Start your Docker Swarm Service:

        $ docker service create -p 2500:80 --name flairdatasystems --replicas 10 --mount type=bind,source=/etc/hostname,destination=/tmp/host-hostname,readonly=true <image name>

6. Start you HAProxy image 

        $ docker run -d -p 80:80 swarm-haproxy

7. On the Machine running the HAProxy image go to http://0.0.0.0 refresh the page to show the different containers running the same service.

<hr>

### References:

- [ HAProxy Configuration Manual ](https://cbonte.github.io/haproxy-dconv/1.8/configuration.html#daemon)
- [How To Use HAProxy to Set Up HTTP Load Balancing on an Ubuntu VPS](https://www.digitalocean.com/community/tutorials/how-to-use-haproxy-to-set-up-http-load-balancing-on-an-ubuntu-vps#testing-load-balancing-and-failover)
- [bhameyie/haproxy.cfg](https://gist.github.com/bhameyie/07c1ee9aaa3e8a200c8c)
