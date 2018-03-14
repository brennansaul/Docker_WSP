### Lab 2: Swarm Mode

This lab will introduce you to swarm mode. You will:
- Learn swarm mode terminology and concepts
- Learn what benefits swarm mode provides
- Learn basic swarm mode commands
- Deploy a service to a cluster of docker nodes
- Scale the service with a single command

<hr>

### What is Swarm Mode?
Swarm mode is a feature for the Docker Engine that allows one to cluster
multiple docker hosts. A Swarm is comprised of a set of nodes that provide services. A node is a host
that has the docker engine installed and is participating in a swarm. There are two types
of nodes and there can be multiple of each type in a swarm. A `Manager node` has 2
primary roles:
- Delegator - The manager dispatches tasks to all nodes in the cluster
- Maintainer - The manager monitors the status of all nodes and services

If a service or node is down the manager will delegate services and load balance
accordingly. The second type of Node in a swarm is a `Worker node`. A worker node
receives tasks from the managers and hosts services in containers. A `Manager node`
also works as a `Worker node`.

The Manager and Worker nodes of a cluster provide the following benefits to your services:
- Load balancing
- Reliability
- Redundancy
- Simple scaling
- Rolling updates
- Secure communication between nodes

If you are having trouble understanding Swarm Mode take a couple of minutes
to watch this video by Elton Stoneman, a Docker Captain.
<center> [![Alt text](https://img.youtube.com/vi/KC4Ad1DS8xU/0.jpg)](https://www.youtube.com/watch?v=KC4Ad1DS8xU)</center>

<hr>

### Configuring a Swarm
We already have a docker swarm configured so you should not execute the following commands.
However, the configuration process is provided to show you how quick and simple it is!

##### *Note: Each node must be on the same subnet and must have the docker engine installed*

##### 1. Initialize the swarm on the host you want to be the manager node:

``` bash
$ docker swarm init --advertise-addr <ip of host>

# Expected Output Format:
Swarm initialized: current node (dxn1zf6l61qsb1josjja83ngz) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join \
    --token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c \
    192.168.99.100:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```

##### 2. On each worker node execute the command given by the `docker swarm init` command.

``` bash
$ docker swarm docker swarm join \
--token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c \
192.168.99.100:2377
```

Boom. Done. That easy.

<hr>

### Introduction to Your Docker Cluster
Swarm Commands For This Lab:
##### `$ docker --help` - Provides a comprehensive list of commands.
##### `$ docker node ls` - Lists the nodes in your swarm.
##### `$ docker info` - Gives current state of the swarm.
##### `$ docker node ps <Host name>`- Lists services running on indicated node.
##### `$ docker service create <options> <image>` - Creates a service from the indicated image.
##### `$ docker service ls` - List the services of the cluster.
##### `$ docker service ps <service>` - List nodes running the service.
##### `$ docker service inspect --pretty <service>` - Display details about the service.
##### `$ docker service scale <service>=<x>` - Scales the indicated service to `x` instances.
##### `$ docker service rm <service>` - Removes the indicated container.
##### *Note: When indicating a service for the above commands the service name or id can be used.*

### Creating Your First Service
##### *Note: All of these commands are executed on the manager node.*

##### 1. Check to see that your swarm is active:
``` bash
$docker info
```

##### 2. View the nodes in your cluster:
``` bash
$ docker node ls
```

##### 3. List the swarm services: (There should be none)
``` bash
$ docker service ls
```

##### 4. Create a service for the brennansaul/flairhello1 image
``` bash
$ docker service create -p 2500:80 --name flairdatasystems --replicas 2 --mount type=bind,source=/etc/hostname,destination=/tmp/host-hostname,readonly=true brennansaul/flairhello1
```
Thats a long command, lets break it down by option:
- `-p <Port A>:<Port B>` - Container publishes `Port A` to the host and maps `Port A` to its exposed `Port B`.
- `--name <name>` - Assigns the service the indicated name.
- `--replicas <num>` - Tells the manager node to dispatch `num` tasks for this service. *A task carries a docker command a worker node*
- `--mount` - The mount flag tells a `worker node` that it should make the indicated directory available to its container.

##### 5. Confirm that the service is running:
``` bash
$ docker service ls
```

##### 6. See where the instances of the service are hosted:
``` bash
$ docker service ps flairdatasystems
```
##### 7. Visit the web pages for each node at `<ip address>:2500`

##### 8. Visit the two addresses of the two other nodes

##### 9. Having two instances is great but lets scale to 10 instances:
``` bash
$ docker service scale flairdatasystems=10
```
##### *Just like that we have added 8 more containers distributed across our cluster.*
##### 10. Confirm the scale:
``` bash
$ docker service ps flairdatasystems
```
##### 11. Scale down and repeat check:
``` bash
# scale down to 1
$ docker service scale flairdatasystems=1

# check number of services
$ docker service ls
```
##### 12. Terminate the service
``` bash
$ docker service rm flairdatasystems
```

In this lab you have seen how easy it is to deploy a service using docker and how
services can be scaled as needed. In the next lab we will show you how to build
a custom docker image and load balance with HAProxy.

<hr>
### References
<hr>
[Get started with swarm mode](https://docs.docker.com/engine/swarm/swarm-tutorial/)
[Swarm mode overview](https://docs.docker.com/engine/swarm/)
[Swarm Mode Key Concepts](https://docs.docker.com/engine/swarm/key-concepts/)
