const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const devConfig = require("./webpack.dev.js")

module.exports = merge(devConfig, {
  devServer: {
    contentBase: path.join(__dirname, "../", "public/"),
    port: 3000,
    historyApiFallback: true,
  },
})
