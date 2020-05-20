#!/bin/bash

set -ex

npm test && npm run test:e2e
