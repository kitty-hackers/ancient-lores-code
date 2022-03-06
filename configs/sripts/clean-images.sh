#!/bin/bash

# Garbage collect for images after multi-stage builds. See https://habr.com/ru/post/304134/ (Eng: https://www.projectatomic.io/blog/2015/07/what-are-docker-none-none-images/)
docker rmi $(docker images -q -f dangling=true)