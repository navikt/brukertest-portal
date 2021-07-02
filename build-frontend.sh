#!/bin/bash
cd frontend
npm install
npm run build
cd ..
rm -rf public
mkdir public
cp -R frontend/build/. public/
cp -R frontend/build/. public/