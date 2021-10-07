#!/usr/bin/env bash

docker run \
  --name mongo \
  --rm \
  --detach \
  --publish 27017:27017 \
  --env MONGO_INITDB_ROOT_USERNAME=root \
  --env MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo:4.4
