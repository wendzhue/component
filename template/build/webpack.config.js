'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = merge(base, {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '{{ name }}.min.js'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})
