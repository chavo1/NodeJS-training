#!/usr/bin/env bash

set -ex

export DEBIAN_FRONTEND=noninteractive

# install unzip
which zip unzip &>/dev/null || {
  apt-get install -y zip unzip
}

CHECKFILE="/tmp/hello-world.zip"
if [ ! -f "$CHECKFILE" ]; then
    unzip /vagrant/ember/hello-world.zip -d /home/vagrant/
    cd /home/vagrant/hello-world
    else
        unzip /tmp/hello-world.zip -d /home/ubuntu/
        cd /home/ubuntu/hello-world
fi

# starting ember
echo starting ember...

sudo systemctl start ember

if [ $? -eq 0 ]; then
    echo Ember started
else
    echo exit1
fi

set +x