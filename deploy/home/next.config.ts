import type { NextConfig } from "next";

// Server build for the home server. The repository's own next.config.ts is a static export for GitHub Pages
// (basePath /car-sharing); this file replaces it only inside the Docker build, see frontend.Dockerfile.
const backendUrl = process.env.BACKEND_INTERNAL_URL || "http://backend:8080";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.prooood.ru", pathname: "/media-public/**" },
    ],
  },
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${backendUrl}/api/:path*` }];
  },
};

export default nextConfig;
