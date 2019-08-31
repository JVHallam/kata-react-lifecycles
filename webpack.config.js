const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry : "./src/webapp/index.js",

  output : {
    path : path.join( __dirname, "dist" ),
    filename : "index_bundle.js"
  },

  module : {
    rules : [
      {
        test : /\.jsx?$/,
        exclude : /node_modules/,
        use : {
          loader : "babel-loader"
        }
      },
      {
        test : /\.s?css$/,
        use : [ "style-loader", "css-loader" ]
      }
    ]
  },

  plugins : [
    new HtmlWebpackPlugin({
      template: "./src/webapp/index.html"
    })
  ],

  devServer : {
    open : true,
    watchOptions : {
      poll : true
    }
  }
};
