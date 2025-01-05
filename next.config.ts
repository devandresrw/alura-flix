import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://image.tmdb.org",
      },
    ],
  }
};

export default nextConfig;
