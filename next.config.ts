const nextConfig = {
  output: "export",
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio/next_static/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: "docs",
};

module.exports = nextConfig;