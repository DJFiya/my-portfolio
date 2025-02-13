/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: "/my-portfolio", // Change this to match your GitHub repo name
  assetPrefix: "/my-portfolio/",
};

export default nextConfig;
