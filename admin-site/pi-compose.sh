###############################################################################
# Filename: pi-compose.sh
# Author:   Brennan Saul
#
# This bash script serves as a "docker compose" command for the pi. This file
# is neccessary becuase docke-compose is not available on the ARM version of
# the Docker Engine.
###############################################################################

# Start the terminal
echo Starting shellinabox
sudo service shellinabox start
echo Started shellinabox

# Start visualizer container: visualizer
echo Starting visualizer
docker run --name visualizer -it -d -p 5000:8080 \
-v /var/run/docker.sock:/var/run/docker.sock alexellis2/visualizer-arm:latest
echo Started visualizer

# Start Database container: database
echo Starting database
docker run --name database -d -p 27017:27017 dhermanns/rpi-mongo
echo Started database

# Start Express API: express
echo Starting express
docker run -d -p 3000:3000 --name express --link=database:dhermanns/rpi-mongo \
brennansaul/pi-api
echo Started express

# Start Angualr 4 app: web
echo Starting web
docker run -d -p 4200:4200 --name web brennansaul/pi-frontend
echo Started web
