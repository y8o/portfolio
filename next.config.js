/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/oscar.portfolio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 