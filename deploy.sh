#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd build

git add . && git commit -m "Build commit"

git subtree push --prefix build origin gh-pages







