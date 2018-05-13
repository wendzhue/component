'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base.config')

module.exports = merge(base, {
  devtool: '#eval-source-map',
  entry: {
    main: './demo/main',
    vendors: ['vue']
  },
  output: {
    path: path.join(__dirname, '../demo/dist'),
    publicPath: '',
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../demo/dist/index.html'),
      template: path.join(__dirname, '../demo/index.html')
    })
  ],
  devServer: {
    compress: true,
    open: true,
    quiet: true
  }
})
