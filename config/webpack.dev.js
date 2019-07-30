const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const baseConfig = require("./webpack.base.js")

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, "../../", "codi-ui/static/js"),
    filename: "[name].bundle.js",
    publicPath: "/static/js/",
    libraryTarget: "var",
    library: "[name]",
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
          ],
        },
      },
      {
        test: /\.css$/,
        use: [{loader: "style-loader", options: {attrs: {id: "css"}}}, {loader: "css-loader"}],
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader", options: {attrs: {id: "scss"}}},
          {loader: "css-loader"},
          {loader: "sass-loader"},
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        loader: "url-loader?limit=30000&name=[name]-[hash].[ext]",
      },
    ],
  },
  mode: "development",
})
