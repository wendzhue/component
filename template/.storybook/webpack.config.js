'use strict';

const path = require('path');
const base = require('../build/webpack.config.base');
const merge = require('webpack-merge');

module.exports = (baseConfig, dev, defaultConfig) => {
  return merge(defaultConfig, base);
};
