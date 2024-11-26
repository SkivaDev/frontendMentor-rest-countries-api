import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/w320/**', // Coincide con las imágenes en esta ruta específica.
      },
    ]
  }
};

export default nextConfig;
