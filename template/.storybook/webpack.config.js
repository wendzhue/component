'use strict'

const path = require('path')
const base = require('../build/webpack.config.base')
const merge = require('webpack-merge')

module.exports = (baseConfig, dev, defaultConfig) => {
  defaultConfig.module.rules.push(
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader']
    },
    {
      test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }
  )
  return defaultConfig
}
