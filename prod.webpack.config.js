const merge = require("webpack-merge");
const base = require("./base.webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[hash:base64]"
              },
              localsConvention: "camelCase"
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            name: "./img/[name].[hash].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[chunkhash].css",
      chunkFilename: "[id].css"
    })
  ]
});
