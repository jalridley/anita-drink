import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,
  trailingSlash: true,
  images: {
    unoptimized: true, // This is required for static exports
  },
};

export default nextConfig;
