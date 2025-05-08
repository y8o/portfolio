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
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses a subdirectory format, so if you're deploying to username.github.io/portfolio
  // uncomment the following line and replace 'portfolio' with your repo name
  // basePath: '/portfolio',
}

export default nextConfig
