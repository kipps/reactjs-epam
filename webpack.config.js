const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {

  console.log(`NODE_ENV = ${process.env.NODE_ENV}`);

  return {
    entry: "./src/index.js",
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true
    },
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index-bundle.js",
      publicPath: "http://localhost:8080/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: [
            // fallback to style-loader in development
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  }
};