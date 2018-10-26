const commonPaths = require('./common-paths');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  output: {
    path: commonPaths.outputPath,
    publicPath: '/'
  },
  context: path.resolve(__dirname, '..'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|pdf)(\?.*)?$/,
        use: [ 
          {
            loader: "file-loader",
            options: {
              limit: 50000,
              name: "[path][name].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              name: "[path][name].[ext]",
            }
          }
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),
    new HtmlWebpackPlugin({
      template: `src/index.html`,
      favicon: `src/favicon.ico`
    }),
  ]
};

module.exports = config;
