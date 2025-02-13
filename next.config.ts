/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: "/my-portfolio", // Ensure this matches your GitHub repo name
  assetPrefix: "/my-portfolio/",

  // Add this rewrite to fix missing asset paths
  trailingSlash: true, 
};

export default nextConfig;
