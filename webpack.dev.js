const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
    publicPath: "/",
    historyApiFallback: true,
    disableHostCheck: true,
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "app.[hash].js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: "./.env",
      safe: false,
      systemvars: false,
      silent: false, // hide any errors
    }),
  ],
});