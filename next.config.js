require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,
  generateEtags: false,
  // target: "server",
  // distDir: "build",

  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
