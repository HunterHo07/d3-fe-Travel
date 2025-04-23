// Direct deployment script using raw Git commands
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting direct Git deployment process...');

// Function to run command and log output
function runCommand(command, args, cwd) {
  console.log(`Running: ${command} ${args.join(' ')}`);
  
  const result = spawnSync(command, args, {
    cwd: cwd || process.cwd(),
    stdio: 'inherit',
    shell: true
  });
  
  if (result.status !== 0) {
    console.error(`Command failed with exit code ${result.status}`);
    process.exit(1);
  }
  
  return result;
}

// Ensure .nojekyll file exists in the out directory
const nojekyllPath = path.join(process.cwd(), 'out', '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  console.log('Creating .nojekyll file...');
  fs.writeFileSync(nojekyllPath, '');
}

// Create a temp directory for deployment
const tempDir = path.join(process.cwd(), 'temp-deploy');
if (fs.existsSync(tempDir)) {
  console.log('Cleaning up previous temp directory...');
  runCommand('rm', ['-rf', tempDir]);
}

// Clone the repository to a new temp directory
console.log('Cloning repository...');
runCommand('git', ['clone', 'https://github.com/HunterHo07/d3-fe-Travel.git', tempDir]);

// Create and switch to gh-pages branch
console.log('Setting up gh-pages branch...');
runCommand('git', ['checkout', '--orphan', 'gh-pages'], tempDir);
runCommand('git', ['rm', '-rf', '.'], tempDir);

// Copy the built site files to the temp directory
console.log('Copying built files...');
runCommand('cp', ['-a', path.join(process.cwd(), 'out/.'), tempDir]);

// Commit and push the changes
console.log('Committing and pushing to gh-pages branch...');
runCommand('git', ['add', '.'], tempDir);
runCommand('git', ['config', 'user.name', 'HunterHo07'], tempDir);
runCommand('git', ['config', 'user.email', 'HunterHo.My@gmail.com'], tempDir);
runCommand('git', ['commit', '-m', 'Deploy to GitHub Pages'], tempDir);
runCommand('git', ['push', '-f', 'origin', 'gh-pages'], tempDir);

// Clean up the temp directory
console.log('Cleaning up...');
runCommand('rm', ['-rf', tempDir]);

console.log('Deployment complete!');
