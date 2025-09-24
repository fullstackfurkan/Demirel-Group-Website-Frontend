import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '7048',
        pathname: '/uploads/**'
      }
    ],
    unoptimized: true,
  }
}

export default nextConfig;
