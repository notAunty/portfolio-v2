#! /bin/bash

cd public
rm -rf *
cd ..
source ~/.profile
npm run build
JEKYLL_ENV=production
bundle exec jekyll build
cp -r _site/. public
cp -r _static/. public
cd public
git add .
git commit -m 'new deploy'
git push -u origin master

