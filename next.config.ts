import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sporton-be-production-095c.up.railway.app",
        pathname: "/uploads/**",
      },
    ]
  }
};

export default nextConfig;
