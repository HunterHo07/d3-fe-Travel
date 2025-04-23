#!/bin/bash

echo "Deploying Jebsen Travel Malaysia to GitHub Pages..."
echo "===================================================="

# Make sure .nojekyll exists
echo "Creating .nojekyll file..."
touch out/.nojekyll

# Create temporary folder for deployment
echo "Setting up deployment folder..."
rm -rf .deploy-temp
mkdir .deploy-temp
cd .deploy-temp

# Initialize git
git init
git config user.name "HunterHo07"
git config user.email "HunterHo.My@gmail.com"

# Add GitHub repository as remote
git remote add origin https://github.com/HunterHo07/d3-fe-Travel.git

# Copy output files
echo "Copying built files..."
cp -r ../out/* .
cp -r ../out/.nojekyll .

# Add, commit, and push files
echo "Committing files to gh-pages branch..."
git add .
git commit -m "Deploy Jebsen Travel Malaysia website"

echo "Pushing to GitHub Pages..."
git push -f origin HEAD:gh-pages

# Clean up
cd ..
rm -rf .deploy-temp

echo "✅ Deployment complete!"
echo "Your site should be available at: https://hunterho07.github.io/d3-fe-Travel/"
echo "If it's not immediately available, please wait a few minutes for GitHub Pages to process the deployment."
