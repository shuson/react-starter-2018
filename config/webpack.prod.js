const commonPaths = require('./common-paths');
const fs = require("fs");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "styles/style.[hash].css",
  disable: process.env.NODE_ENV === "development"
});

const config = {
  name: "production",
  mode: 'production',
  target: 'web',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: 'scripts/[name].[hash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 2,
                camelCase: true,
                sourceMap: true
              }
          }, {
              loader: "sass-loader"
          },{
            loader: "postcss-loader",
            options: {
              config: {
                ctx: {
                  autoprefixer: {
                    browsers: 'last 2 versions'
                  }
                }
              }
            }
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                camelCase: true,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions'
                    }
                  }
                }
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
};

module.exports = config;
