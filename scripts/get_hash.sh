#!/bin/bash

HASH=$(git rev-parse HEAD | cut -c1-10)
export COMMIT=$HASH