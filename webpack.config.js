const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./source/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules: [
      {
        test: /\.(js$|jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: false,
        template: require('html-webpack-template'),
        links: ['styles.css'],
        title: 'Testing My React Apps'
      }
    )
  ]
}
