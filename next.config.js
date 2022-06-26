/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['jezioro.firlej.pl'],
  },
  env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS
  }
}

module.exports = nextConfig
