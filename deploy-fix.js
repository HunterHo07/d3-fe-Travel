// Simplified deployment script to avoid path length issues
const ghpages = require('gh-pages');
const path = require('path');
const os = require('os');

// Use temp directory to avoid long path issues
const tmpDir = path.join(os.tmpdir(), 'gh-pages-deploy');

console.log('Starting deployment process with temporary directory...');
console.log('Temp directory:', tmpDir);

ghpages.publish(
  'out',  // Just use the relative path to output directory
  {
    branch: 'gh-pages',
    dotfiles: true,
    repo: 'https://github.com/HunterHo07/d3-fe-Travel.git',
    user: {
      name: 'HunterHo07',
      email: 'HunterHo.My@gmail.com'
    },
    message: 'Auto-deploy from deployment script',
    clone: tmpDir, // Use a short temporary directory path
    silent: false, // Show detailed logs for debugging
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      return;
    }
    console.log('Deployment complete!');
  }
);
