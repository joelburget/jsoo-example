/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    if (!config.resolve) {
      config.resolve = {}
    }
    if (!config.resolve.fallback) {
      config.resolve.fallback = {}
    }
    config.resolve.fallback.fs = false
    config.resolve.fallback.child_process = false
    return config
  },
}

module.exports = nextConfig
