#!/bin/bash

docker rm -f json-sever || true &&
docker rmi json-sever || true &&
docker build -t json-sever . &&
docker run -d --name json-sever -p 3004:3004 json-server
