@echo off
echo Building project...
call bun run build

echo Setting up deployment...
cd out
echo. > .nojekyll

echo Initializing Git repository...
git init
git add .
git commit -m "Deploy to GitHub Pages"

echo Pushing to GitHub Pages...
git push -f https://github.com/HunterHo07/d3-fe-Travel.git main:gh-pages

echo Deployment complete!
cd ..
