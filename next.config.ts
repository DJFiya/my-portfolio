/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs", // GitHub Pages requires content in the docs folder
  images: {
    unoptimized: true, // Required for static exports
  },
  basePath: "/my-portfolio", // This must match your repository name
  assetPrefix: "/my-portfolio/",
};

export default nextConfig;