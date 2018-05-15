'use strict'

const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack.config.base')

module.exports = merge(base, {
  entry: {
    main: './demo/main',
    vendors: ['vue']
  },
  output: {
    path: path.join(__dirname, '../docs'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id]np.[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../docs/index.html'),
      template: path.join(__dirname, '../demo/index.html')
    }),
    new ExtractTextPlugin({
      filename: path.join(__dirname, '../docs/css/[name].[chunkhash].css/'),
      allChunks: true
    })
  ]
})
