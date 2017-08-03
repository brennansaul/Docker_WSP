### Lab 1: Getting Familiar with Docker

This lab will introduce you to docker basics. You will:
- Learn what docker is, its capabilities and what benefits it provides
- Learn basic docker commands and host a simple web page using docker

<hr>
### What is Docker?
Docker is the world's leading software container platform that has a wide range
of capabilities that benefit and appeal to Developers, System Administrators,
DevOps teams, DataCenter Architects, and more. **A what platform?**
Containers provide an isolated environment and package everything required for a
piece of software to run: system libraries, runtime system tools, code, and
settings. Containers have similarities to Virtual Machines but are not the
same. Unlike VMs, Containers do not require a full copy of an operating system.
The minimalist architecture of a container makes them lightweight and efficient
while still providing the portability and security of a VM.

Containers are:
- Lightweight
- Standard
- Secure

Benefits of Docker:
- Portability & Standardization
- Efficiency
- Scalability
- Redundancy
- Security
- Version Control
- Continuous Deployment and Testing
- Multi-Cloud Platforms (AWS, VirtualBox, Google Compute Engine, Microsoft Azure...)

<hr>
### Our first Docker Application
In this section we will introduce a few basic docker commands that will
teach you how to use docker!

##### `$ docker --help` - Provides a comprehensive list of commands.
##### `$ docker pull <user>/<image>` - Pulls an image from Docker Hub.
##### `$ docker images`- Lists all the images on the host system.
##### `$ docker run <image>` - Starts a container based off the provided image.
##### `$ docker ps -a` - Lists all containers on the host machine.
##### `$ docker stop <container ID>` - Stops the indicated running container.
##### `$ docker rm <container ID>` - Removes the indicated container.
##### `$ docker rmi <image ID>` - Removes the indicated image.

#### Deploy our first container!
The first thing we need to do is `pull` a docker image.A docker image is a
snapshot of a container and is produced with the `build` command. Docker images
are used to create docker containers when used with the `run` command.

Pull our webpage image:
``` bash
$ docker pull brennansaul/flairhello1
```

View the docker image we just pulled:
``` bash
$ docker images
REPOSITORY                        TAG                 IMAGE ID            CREATED               SIZE
brennansaul/flairhello1           latest              6de6aea1d19a        1 second ago          136MB

```

Deploy our webpage
``` bash
$ docker run -d -p 2500:80 brennansaul/flairhello1

```
The option `-d` runs the process in the background and the option `-p 2500:80` maps port 2500 on to port 80 in the container.

In a browser visit <ip address of the manager node>:2500 and you will see the web page.

Running the following command will display all running containers. Look at the container ID displayed on the web page it will match the id of the container in the output!

``` bash
$ docker ps

CONTAINER ID        IMAGE                      COMMAND                CREATED             STATUS              PORTS                  NAMES
c507fd9a9f35        brennansaul/flairhello1    "/bin/sh -c /run.sh"   3 minutes ago       Up 3 minutes        0.0.0.0:2500->80/tcp   zealous_thompson
```

Lets wrap up by stoping our running container, removing the container and the image.


``` bash
# Stop the container - Only the first 3 digits are necessary
$ docker stop <container id>

# Remove the container
$ docker rm <container id>

# Remove the image
$ docker rmi <image id>
```

<hr>
### References
<hr>
- [What is Docker](https://www.docker.com/what-docker)
- [Getting Started](https://prakhar.me/docker-curriculum/)
- [5 Key Benefits of Docker: CI, Version Control, Portability, Isolation and Security](https://dzone.com/articles/5-key-benefits-docker-ci)
- [Top 10 Benefits You Will Get By Using Docker](https://apiumhub.com/tech-blog-barcelona/top-benefits-using-docker/)
