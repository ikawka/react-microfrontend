require("dotenv").config();
module.exports = {
  webpack: (config, env) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    config.output.filename = "static/js/[name].[contenthash:8].js";
    config.plugins[5].options.filename =
      "static/css/[name].[contenthash:8].css";
    return config;
  },
};
