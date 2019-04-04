// next.config.js
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const { exportPathMap } = require('nextjs-export-path-map');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const {
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT,
} = require('next/constants');

dotenvLoad();

const { NODE_ENV, API_URL } = process.env;

// next.js configuration
const nextConfig = {
  generateBuildId: async () => {
    // //////////////////////////////////////////
    // Next.js uses a constant generated at build time to identify
    // which version of your application is being served.
    // This can cause problems in multi-server deployments
    // when next build is ran on every server.
    // In order to keep a static build id between
    // builds you can provide the generateBuildId function:
    // //////////////////////////////////////////
    // When process.env.YOUR_BUILD_ID is undefined we fall back to the default
    // if (process.env.YOUR_BUILD_ID) {
    //   return process.env.YOUR_BUILD_ID
    // }
    // return null
  },
  publicRuntimeConfig: {
    NODE_ENV: NODE_ENV,
    API_URL,
  },
};

module.exports = withPlugins(
  [
    [
      withTypescript,
      {
        webpack(config, options) {
          // Do not run type checking twice:
          if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

          // config.plugins = [
          //   ...config.plugins,
          //   new Dotenv({
          //     path: path.join(__dirname, '.env'),
          //     systemvars: true,
          //   }),
          // ];

          return config;
        },
        exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages')),
      },
    ],
    [
      withCSS,
      {
        cssModules: false,
        cssLoaderOptions: {
          importLoaders: 1,
        },
      },
    ],
  ],
  nextConfig
);
