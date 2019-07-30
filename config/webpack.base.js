const webpack = require("webpack")

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
     splitChunks: {
       chunks: 'all'
     }
   },
}
