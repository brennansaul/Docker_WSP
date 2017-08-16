FROM ubuntu:16.04
MAINTAINER Brennansaul <jamessaul7629@gmail.com>

ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64

# Install JDK 8
RUN echo "Install JDK 8" && \
    apt-get -y update && \
    apt install -y openjdk-8-jdk

# Free up disk space
RUN echo "$LOG_TAG Cleanup" && \
    apt-get autoclean && \
    apt-get clean

# Check version
CMD ["java", "version"]
