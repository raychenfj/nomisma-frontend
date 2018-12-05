#!/bin/bash

# ssh root
scp .dockerignore db.js Dockerfile package.json publish.sh yarn.lock root@v2ray:/root/json-server
ssh root@v2ray "cd /root/json-server && \
docker rm -f json-server || true && \
docker rmi json-server || true && \
docker build -t json-server . && \
docker run -d --name json-server -p 3004:3004 json-server"
