/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/oscar.portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/oscar.portfolio/' : '',
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses a subdirectory format, so if you're deploying to username.github.io/oscar.portfolio
  // uncomment the following line and replace 'oscar.portfolio' with your repo name
  // basePath: '/oscar.portfolio',
}

export default nextConfig
