# Docker WSP
This repository contains all of the software developed for the **Docker World's Smartest Paperweight** project.
The project architecture is composed of a stack of 4 Raspberry Pi's single board computers. These 4 Pis are clusted 
using `Docker Swarm Mode`. The node cluster is composed of a manager node, `pi-manager`, and 3 worker nodes: 
`pi-worker1`, `pi-worker2`, and `pi-worker3`. Currenly the project is a docker learning tool that 
provides cluster information (currenlty dummy data) and step by step labs introduciong varous capabilities 
of the docker engine.

## Contents:

### Admin-site
Contains the source code for the Angular 4 developed admin site. The end gola for the section will contain:
- Client: The user interface. (significatly developed)
- Server: The nodeJS Api for communication between client and database. (started)
- Database: mostly just a dockerfile and other configuartion needed. (To-Do)

### Docker-Images
Contiains all of the docker images developed while working on the Docker-WSP. Some images are used and some kept for
development reference. 

### Development Documentation
Documentations takes two forms:
- Docker-WSP-Documentation.docx
- README.md files throughout this repository. 

The README.md files are designed to provide setup information and guides for the component of the project 
it is grouped with. The word dockument is supposed to be comprehensive and also lists sources that were
used during development. There is overlap between the two groups but it is important that one becomes 
familiar with both sources.

## Use:

### ARM 

1. Set up your docker swarm 

2. Clone this repository on the manager node

3. Switch to the admin-site directory

4. Grant privileges to pi-compose.sh: 
``` bash
$ chmod 777 pi-compose.sh
```

5. Execute script:
``` bash
$ ./pi-compose.sh
```
**Services will take a couple minutes to start**


### x86 

1. Set up your docker swarm 

2. Clone this repository on the manager node

3. Switch to the admin-site directory

4. Run docker compose
```
$ docker-compose up 
```

## To Do
- Assign static ip addresses to pis 
  - change `haproxy.cfg`, `/ect/hosts`, `labview.component.html`, and `visualizer.component.html` to point to correct static addresses 
- Update Container Database for when
  - Container created
  - Container destroyed 
  - Container relocated
  - Increment contianer views when visited 
<hr>

## Acknowledgments:

- Robert Burgess - Practice Leader
- Stan Stewart - Project Manager
- Robert H. Davis II - Software Architect 
- Matt Hedges - Datacenter Architect 
- Brennan Saul - Software Developer 

## References

- [Swarm Visualizer](https://github.com/ManoMarks/docker-swarm-visualizer): ManoMarks
- ShellInABox: Markus Gutschke
