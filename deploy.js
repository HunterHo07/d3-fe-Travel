// Simple deployment script using gh-pages
const ghpages = require('gh-pages');
const path = require('path');

console.log('Starting deployment process...');

ghpages.publish(
  path.join(process.cwd(), 'out'),
  {
    branch: 'gh-pages',
    dotfiles: true,
    repo: 'https://github.com/HunterHo07/d3-fe-Travel.git',
    user: {
      name: 'HunterHo07',
      email: 'HunterHo.My@gmail.com'
    },
    message: 'Auto-deploy from deployment script'
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      return;
    }
    console.log('Deployment complete!');
  }
);
