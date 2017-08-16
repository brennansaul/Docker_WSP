# Using the ubuntu 16.04 image with JDK 8 installed 
FROM brennansaul/jdk8
MAINTAINER Brennansaul <jamessaul7629@gmail.com>

ENV ZEPPELIN_HOME=/opt/zeppelin \
    LOG_TAG="ZEPPELIN_LOG:"

ARG Z_VERSION=0.7.2

# 1. Install wget
# 2. Download Zeppelin Binary
# 3. Unpack Binary
# 4. Remove binary
# 5. Move unpacked zeppelin to ZEPPELIN_HOME
# NOTE: On the pi ZEPPELIN_HOME variable is different
RUN echo "$LOG_TAG set up Zeppelin" && \
    apt install -y wget && \
    wget http://archive.apache.org/dist/zeppelin/zeppelin-${Z_VERSION}/zeppelin-${Z_VERSION}-bin-netinst.tgz && \
    tar -zxvf zeppelin-${Z_VERSION}-bin-netinst.tgz && \
    rm -rf zeppelin-${Z_VERSION}-bin-netinst.tgz && \
    mv zeppelin-${Z_VERSION}-bin-netinst ${ZEPPELIN_HOME}

# Free up disk space
RUN echo "$LOG_TAG Cleanup" && \
    apt-get autoclean && \
    apt-get clean

# Copy zeppelin-site.xml with our settings to /opt/zeppelin/conf/
COPY zeppelin-site.xml /opt/zeppelin/conf/

# Expose port number 2500 on container
EXPOSE 2500

# Create the following mount points
VOLUME ${ZEPPELIN_HOME}/logs \
       ${ZEPPELIN_HOME}/notebook

# Set the working directory for the following command
WORKDIR ${ZEPPELIN_HOME}

# Command that will execute when you run the container
CMD     ./bin/zeppelin.sh run
