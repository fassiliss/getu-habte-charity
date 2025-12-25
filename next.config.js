/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '/images': path.resolve(__dirname, 'public/images'),
    };
    return config;
  },
}

module.exports = nextConfig
