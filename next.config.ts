import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/harness-ai/agents',
  assetPrefix: '/harness-ai/agents',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
