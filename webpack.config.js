const webpack = require("webpack"),
  path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/js", "mine.js"),
  },
  output: {
    filename: "Mine.bundle.js",
    path: path.resolve(__dirname, "dist/js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    publicPath: "dist/js",
  },
};
