const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-dom', 'react-router'],
    app: ['@babel/polyfill', './src/index']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js',
    chunkFilename: 'assets/[name].[chunkhash].js'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ["react-hot-loader/babel"],
        }
      },
      {
        test: /\.scss|css$/i,
        use: ["style-loader", "css-loader", "resolve-url-loader"],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'all',
          minChunks: Infinity,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
    })
  ]
}
