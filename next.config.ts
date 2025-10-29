import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimization for smooth transitions and performance
  reactStrictMode: true,
  compress: true,

  // Enable experimental optimizations for better performance
  experimental: {
    optimizePackageImports: ["react-icons"],
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
