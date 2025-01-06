import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: '/dietelxeg/image/upload/**'
      }
    ],
    minimumCacheTTL: 3600, // Aumentado a 1 hora
    formats: ['image/avif', 'image/webp'], // Añadido soporte para AVIF
    loader: 'custom',
    loaderFile: './src/utils/cloudinaryLoader.ts',
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  }
};

export default nextConfig;
