#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd build 

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:willrhyd/personalSite_v2.git master:gh-pages








