const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha'],
    reporters: ['spec'],
    files: [
      './*.+(vue|js)'
    ],
    preprocessors: {
      '../components/*.+(vue|js)': ['webpack'],
      './*.+(vue|js)': ['webpack']
    },
    webpack: webpackConfig
  })
}
