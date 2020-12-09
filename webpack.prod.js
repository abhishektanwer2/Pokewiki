const path = require("path");
const webpack = require("webpack");
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_URL': process.env.REACT_APP_URL,
      'process.env.REACT_APP_IMAGE_URL': process.env.REACT_APP_IMAGE_URL
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
    runtimeChunk: {
      name: 'runtime',
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  }
})
