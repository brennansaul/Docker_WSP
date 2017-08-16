# Zeppelin

## Overview
Dockerized Zeppelin image.

- Version: 2.7.0
- Operating System: Ubuntu 16.04 with OpenJDK8
- Base Image: [brennansaul/jdk8](https://hub.docker.com/r/brennansaul/jdk8/) 

## Files

- `Dockerfile`
- `zeppelin-site.xml`
- `README.md`

## Exposed ports

- 2500 - Port for zeppelin web application

## Volumes 

Zeppelin volumes:
- /opt/zeppelin/logs
- /opt/zeppelin/notebook

## Environment Variables 

From base-image:
- JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64

From Zeppelin:
- ZEPPELIN_HOME=/opt/zeppelin
- LOG_TAG="ZEPPELIN_LOG:"
- Z_VERSION=0.7.2

## How to use from the Docker CLI

1. Make sure that Docker CLI is running 
2. Start container `docker run -d -p 2500:2500 brennansaul/zeppelin`
3. In your browser navigate to `localhost:2500`

## Instructions for building and running image on your own computer

1. Clone this repository 
2. Navigate on you local machine to the directory containing the Dockerfile 
3. Build command: `docker build -t zeppelin .`
4. Run command: `docker run -d -p 2500:2500 zeppelin`
5. In your browser navigate to `localhost:2500`

## Official Documentation and Guides

- [Overview](http://zeppelin.apache.org/docs/0.7.0/)
- [Quick Start](http://zeppelin.apache.org/docs/0.7.0/install/install.html)
- [Interpreters](http://zeppelin.apache.org/docs/0.7.0/manual/interpreters.html)
- [Wiki](https://cwiki.apache.org/confluence/display/ZEPPELIN/Zeppelin+Home)
