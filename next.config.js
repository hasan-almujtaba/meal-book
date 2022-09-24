/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['apis', 'components', 'hooks', 'layouts', 'pages', 'store', 'types'],
  },
  images: {
    domains: ['www.themealdb.com'],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
