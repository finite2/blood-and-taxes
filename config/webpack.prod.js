const path = require('path')
const webpack = require("webpack")
const merge = require('webpack-merge')
const baseConfig = require('./base.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../../', "codi-ui/static/js"),
    filename: '[name].bundle.[chunkhash].js',
    publicPath: "/static/js/",
    libraryTarget: 'var',
    library: '[name]'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-syntax-class-properties",
              "@babel/plugin-proposal-class-properties",
              "react-hot-loader/babel",
            ]
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  },
  mode: 'production'
})
