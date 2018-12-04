#!/bin/bash

npm run build:prod &&
ssh root@v2ray "rm -rf /root/html/nomisma && mkdir -p /root/html/nomisma" &&
scp -r build/** root@v2ray:/root/html/nomisma
rm -rf build
