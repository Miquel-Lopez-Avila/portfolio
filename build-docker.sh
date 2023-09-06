#!/bin/zsh
docker rm -f website-boilerplate
docker build -t website-boilerplate .
docker run --name=website-boilerplate --rm -p 3000:3000 -it website-boilerplate
