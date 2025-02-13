/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,  // <- Add this line
  distDir: "docs", // Output files to 'docs/' instead of '.next'
};

module.exports = nextConfig;
