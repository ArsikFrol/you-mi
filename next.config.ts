import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yandex.ru',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn3.iconfinder.com',
        pathname: '/**',
      }
    ],
  },
};
export default nextConfig;
