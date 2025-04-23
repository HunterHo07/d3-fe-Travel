import type { NextConfig } from "next";

// Get the GitHub repository name from environment or use default
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'TravelCruiseAgencyWebsite';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static HTML export
  distDir: 'out',    // Output directory for static files
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server-based features since GitHub Pages is static hosting
  trailingSlash: true, // Add trailing slashes to all routes
};

export default nextConfig;
