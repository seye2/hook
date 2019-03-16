// next.config.js
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const withCSS = require('@zeit/next-css');
const { exportPathMap } = require('nextjs-export-path-map');

module.exports = withTypescript({
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
  },
  cssModules: true,
  exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages')),
});
