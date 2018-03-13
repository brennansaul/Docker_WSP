Terminal login: pi / dockerpi
### Lab 1: Getting Familiar with Docker

This lab will introduce you to docker basics. You will:
- Learn what docker is, its capabilities and what benefits it provides.
- Learn basic docker commands
- Host a simple web page using docker.

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
Docker Commands For This Lab:

##### `$ docker --help` - Provides a comprehensive list of commands.
##### `$ docker pull <user>/<image>` - Pulls an image from Docker Hub.
##### `$ docker images`- Lists all the images on the host system.
##### `$ docker run <image>` - Starts a container based off the provided image.
##### `$ docker ps -a` - Lists all containers on the host machine.
##### `$ docker stop <container ID>` - Stops the indicated running container.
##### `$ docker rm <container ID>` - Removes the indicated container.
##### `$ docker rmi <image ID>` - Removes the indicated image.
##### *Note: When referencing a container or image you only need to provide the first 3 characters.*

### Deploy our first container!
The first thing we need to do is `pull` a docker image. A docker image is a
snapshot of a container and is produced with the `build` command. Docker images
are used to create docker containers when used with the `run` command.

#### TERMINAL LOGIN: pi - dockerpi

##### 1. Pull our webpage image:

``` bash
$ docker pull brennansaul/flairhello1
```

##### 2. View the docker image we just pulled:

``` bash
$ docker images
REPOSITORY                        TAG                 IMAGE ID            CREATED               SIZE
brennansaul/flairhello1           latest              6de6aea1d19a        1 second ago          136MB
```

##### 3. Deploy our webpage:

``` bash
$ docker run -d -p 2500:80 brennansaul/flairhello1
```

- The `-d` option runs the container in the background (detached mode)
- The `-p 2500:80` makes the container listen on port 2500 and maps port 2500 to port 80 in the container.


##### 4. In a browser visit (ip address of the manager node):2500 and you will see the web page.

### Thats all it takes to start running a container!
Not easy enough? If the image we want to deploy is on DockerHub the run command will automatically pull the image if it is not found locally!

Now that We've Learned how to deploy a web page using docker lets learn how to stop it and clean up our docker machine.

#### Clean up

##### 1. Ask docker what containers are running:
``` bash
$ docker ps

CONTAINER ID        IMAGE                      COMMAND                CREATED             STATUS              PORTS                  NAMES
c507fd9a9f35        brennansaul/flairhello1    "/bin/sh -c /run.sh"   3 minutes ago       Up 3 minutes        0.0.0.0:2500->80/tcp   zealous_thompson
```
- Look at the container ID displayed on our webpage and we see that it matches the id of the container in the output!


##### 2. Stoping the running container:
``` bash
# Stop the container - Only the first 3 digits are necessary
$ docker stop <container id>

# Check to see that there are no running containers
$ docker ps

# View stopped containers
$ docker ps -a
```
- When you run `docker ps` the list will be empty
- When you run `docker ps -a` you will see the container we just stopped.
- You can restart a stopped container using the command `start <container id>`

##### 3. Remove the container and image:
``` bash
# Remove the container
$ docker rm <container id>

# Remove the image
$ docker rmi <image id>
```

### Done! Lets move on to Lab 2 to learn about clustering multiple docker engine hosts with Swarm Mode!

<hr>

### References

<hr>

- [What is Docker](https://www.docker.com/what-docker)
- [Getting Started](https://prakhar.me/docker-curriculum/)
- [5 Key Benefits of Docker: CI, Version Control, Portability, Isolation and Security](https://dzone.com/articles/5-key-benefits-docker-ci)
- [Top 10 Benefits You Will Get By Using Docker](https://apiumhub.com/tech-blog-barcelona/top-benefits-using-docker/)
