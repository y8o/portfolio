import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses a subdirectory format, so if you're deploying to username.github.io/portfolio
  // uncomment the following line and replace 'portfolio' with your repo name
  basePath: '/portfolio', // Add your GitHub Pages repo name here
  assetPrefix: '/portfolio/',
};

export default nextConfig;
