const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

var webpackConfig = {
  entry: ['@babel/polyfill', './index.js'],
  output: {
    path: path.join(__dirname, "/../dist"),
    filename: "app.bundle.js",
    futureEmitAssets: true
  },
  devServer:{
    host: "localhost",
    port: "8080"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env', 
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.gif$/,
        exclude: /(node_modules)/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};

module.exports = webpackConfig;