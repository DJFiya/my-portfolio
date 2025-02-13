import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: "/my-portfolio", // Ensure this matches your GitHub repo name
  assetPrefix: "/my-portfolio/",
};

module.exports = nextConfig;