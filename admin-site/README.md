# PUBLIC
## Local serve for development:
```
# navigate the the public directory 

# launch the site on localhost:4200
$ ng serve
```

# Server
## Local serve for development:
```
# navigate the the server directory 

# launch the site on localhost:3000
$ ng serve
```

# Build pi compatible docker image for either:
1. Navigate to directory public or server (depending which you want to build)

2. Build image 
```
## For Public
$ docker build -f Dockerfile-pi -t brennansaul/pi-frontend .

## For Server
$ docker build -f Dockerfile-pi -t brennansaul/pi-frontend .

```

