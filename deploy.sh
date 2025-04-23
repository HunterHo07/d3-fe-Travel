#!/bin/bash

# Build the project
echo "Building project..."
bun run build

# Navigate to the output directory
cd out

# Create .nojekyll file to prevent Jekyll processing
touch .nojekyll

# Initialize git in the output directory
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push -f https://github.com/HunterHo07/d3-fe-Travel.git main:gh-pages

echo "Deployment complete!"
