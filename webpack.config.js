const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
        // use: {
        //   loader: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"]
        // }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader"
        ]
        // use: {
        //   loader: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"]
        // }
      },
      {
        test: /.(jpg|jpeg|png|svg|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
      // chunkFilename: "[id].css"
    })
  ]
};
