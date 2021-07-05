#!/bin/bash
cd frontend
yarn
yarn run build
cd ..
rm -rf public
mkdir public
cp -R frontend/build/. public/