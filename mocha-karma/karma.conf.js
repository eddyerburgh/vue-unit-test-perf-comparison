const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const ChromiumRevision = require('puppeteer/package.json').puppeteer.chromium_revision
const Downloader = require('puppeteer/utils/ChromiumDownloader')
const revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision)


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
