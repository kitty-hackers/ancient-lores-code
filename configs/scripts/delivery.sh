#!/bin/bash

CONTAINER_OPTIONS='-d -p 3001:80' # $1
CONTAINER_NAME='ancient-lores-site' # $2
IMAGE_NAME='ancient-lores/ancient-lores-site:latest' # $3

if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
	docker stop $CONTAINER_NAME

	if [ "$(docker ps -aq -f status=exited -f name=$CONTAINER_NAME)" ]; then
			# cleanup
			docker rm $CONTAINER_NAME
	fi
fi

# run your container
docker run $CONTAINER_OPTIONS --name $CONTAINER_NAME $IMAGE_NAME