#!/bin/sh
#

set -e

BIN_PATH=$(cd "$(dirname "$0")"; pwd -P)
WORK_PATH=${BIN_PATH}/../

cd ${WORK_PATH}


if [ "$SILICON_PROFILE" = "development" ]; then
  npm run build:all
fi

npx lerna run start --scope=@helixbox/silicon-generator -- $@

