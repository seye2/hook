// next.config.js
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const withCSS = require('@zeit/next-css');
const { exportPathMap } = require('nextjs-export-path-map');
const Dotenv = require('dotenv-webpack');
import { baseURL } from '../api';

module.exports = withTypescript({
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
  publicRuntimeConfig: {
    API_URL: baseURL,
  },
  cssModules: true,
  exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages')),
});
