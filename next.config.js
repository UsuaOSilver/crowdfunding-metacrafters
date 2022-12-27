/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DEPLOYED_ADDRESS: process.env.DEPLOYED_ADDRESS,
    // MORALIS_URL: process.env.MORALIS_URL,
    // MORALIS_SPEEDY_NODE_KEY: process.env.MORALIS_SPEEDY_NODE_KEY,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
