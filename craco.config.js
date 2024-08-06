const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        buffer: require.resolve('buffer/'),
        timers: require.resolve('timers-browserify')
      };

      return webpackConfig;
    }
  }
};