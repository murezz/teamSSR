import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: false, // pastikan ini false (default)
    formats: ["image/webp"], // convert otomatis ke WebP
  },
};

export default nextConfig;
