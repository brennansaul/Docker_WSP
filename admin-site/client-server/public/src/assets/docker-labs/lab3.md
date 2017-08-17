### Lab 3: Dockerfile & Load balancing
This lab will guide you through the processes of:
- Creating a basic Docker image
- Deploying A Network Load Balancer With Docker (HAProxy)

### Creating a Docker Image
In order to build an image using Docker we use what is called a `Dockerfile`.
A `Dockerfile` can be thought of as a recipe for a cake but instead of eggs, flour,
and milk our recipe contains a base image, commands, and source code provided in the form of instructions.
The first instruction that one uses is the `FROM`instruction, This tells Docker
what foundation we are building our image on. Choosing the best base image
for your situation can save you a lot of work so that you do not have to reinvent
the wheel. To find a base image that suits you're needs go to [Docker Hub](https://hub.docker.com/). There you will find both Organization and Community
created images, create a profile and you will be able to contribute images you
have created!.

After the `FROM` instruction there are many commands that one
may use to create their image:
##### `MAINTAINER` - Give yourself some credit.
##### `RUN` - Executes commands for the current image. Each run command creates a new layer to build on top of.
##### `ENV` - Sets environment variable for the image.
##### `COPY` - Copies files/directories from host <src> to image at path <destination>.
##### `ADD`- Copies files/directories from host <src> to image at path <dest>.
##### `WORKDIR` - Sets the working directory for any instruction.
##### `EXPOSE` - Tells the container to listen on the indicated port. This command does not make the port accessible to the host, that is done with the `-p port:port` option with  `docker run` at the command line.
##### `CMD` - Defines the default command executed when the container is run.
##### *NOTE: A comprehensive list of all Dockerfile instructions provided with descriptions and examples can be found using the [Dockerfile reference Documentation](https://docs.docker.com/engine/reference/builder/#from).*

### Writing a docker file
One pattern commonly used in docker files is after initial `FROM` instruction followed by `ENV` instructions to define environment variables. Next One will used The Run instructions to update and upgrade currently installed packages, create directories, and install new packages or dependencies. Next one will copy over customized configuration files, and source code for the image using the `ADD` or `COPY` instruction. The two instructions behave similarly but have individual nuances. To wrap up the `Dockerfile` one will use 'Expose' to make the container listen on any ports needed, `WORKDIR` can be used to switch to a specific directory so that the last instruction `CMD` will be run correctly. *NOTE: This is just a basic method and will not apply to all situations!*

### Example: HAProxy image for Raspberry Pi
``` Dockerfile
  # We have selected the arm32v7/haproxy base image. The reason we have chosen
  # this instead of the offical HAProxy base image is because we are using a
  # raspberry pi with the docker engine. Most all other machines (Computers,
  # Cloud servers, ect.) will run any docker image.
  # However because the Pi has a 32bit ARM processor as opposed to the common
  # x86 processor it must have images compatible with an ARM processor.
  # This is an easy problem to solve. For any Dockerfile to convert it to work
  # with the ARM architecture simply change the FROM instruction to specify a
  # base image that is compatible. Key words that will help find these base
  # images on docker hub are rpi, arm32v7, and arm32.
  FROM arm32v7/haproxy
  MAINTAINER brennansaul jamessaul7629@gmail.com

  # Here we copy our configuration file for HAProxy
  COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg
```
#### Done! In just three lines we have written a `Dockerfile` that we can use to build a docker image to be run as a container!

*The haproxy.cfg file has been provided if you would like to see easy it is to configure an HAProxy load balancer:*

```
# *****************************************************************************
# Docker WSP HAProxy configuration file
# Author: Brennan Saul
# *****************************************************************************
global
    daemon                      # makes the process fork in the background
    log 127.0.0.1 local0 notice # Adds a global yslog server
    maxconn 256                 # sets the maximum per-process number of concurrent connections.
    #user haproxy
    #group haproxy

defaults
    log     global
    mode    http
    option  httplog
    option  dontlognull
    retries 3
    option redispatch
    timeout connect  5000
    timeout client  10000
    timeout server  10000

listen stats
    bind 0.0.0.0:80 # This is the page you will access
    mode http
    stats enable
    stats uri /haproxy?stats
    stats realm Strictly\ Private
    stats auth A_Username:pi
    stats auth Another_User:raspberry
    balance roundrobin
    option httpclose
    option forwardfor
    server pi-manager 1.1.1.1:2500 check # Docker node
    server pi-worker1 1.2.2.2:2500 check # Docker node
    server pi-worker2 3.3.3.3:2500 check # Docker node
    server pi-worker3 4.4.4.4:2500 check # Docker node
    # More docker nodes? add here!
```

### Build, Run, Balance
Now that we have finished our `Dockerfile` lets build and run that image. Before we do though lets create our helloFlair service with 8 replicas so that our load balancer will have something to balance.

##### 1. Launch flair hello webpage service with 8 replicas
``` bash
$ docker service create -p 2500:80 --name flairdatasystems --replicas 8 --mount type=bind,source=/etc/hostname,destination=/tmp/host-hostname,readonly=true brennansaul/flairhello1
```

##### 2. Build Image from our Dockerfile
*Our `Dockerfile` should be placed in the directory with our configuration file. For simplicity the image has already been created. However the commands to build the image are as follows.*
``` bash
# Switch to directory containing Dockerfile and haproxy.cfg and build image
$ cd <directory with files>
$ docker build -t brennansaul/pi-flair-haproxy .

# Test image
$ docker run -it --rm --name haproxy-syntax-check pi-haproxy haproxy -c -f /usr/local/etc/haproxy/haproxy.cfg
```

##### 3. Start HAProxy Load Balancer
``` bash
$ docker run -d -p 80:80 brennansaul/pi-flair-haproxy
```

##### 4. On the Machine running the HAProxy image go to http://0.0.0.0 or go to the http://ip-of-pi-manager. Refresh the page to show the different containers running the same service!

Just like that we have deployed a network load balancer that can react to the scaling nature of docker swarm mode!

<hr>
### References
<hr>
[Docker Documentation](https://docs.docker.com/engine/reference/builder/)
- [ HAProxy Configuration Manual ](https://cbonte.github.io/haproxy-dconv/1.8/configuration.html#daemon)
- [How To Use HAProxy to Set Up HTTP Load Balancing on an Ubuntu VPS](https://www.digitalocean.com/community/tutorials/how-to-use-haproxy-to-set-up-http-load-balancing-on-an-ubuntu-vps#testing-load-balancing-and-failover)
- [bhameyie/haproxy.cfg](https://gist.github.com/bhameyie/07c1ee9aaa3e8a200c8c)
