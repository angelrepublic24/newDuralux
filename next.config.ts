import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'duraluxcanopies.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        // pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
