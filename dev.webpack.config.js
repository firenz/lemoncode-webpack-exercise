const merge = require("webpack-merge");
const base = require("./base.webpack.config");

module.exports = merge(base, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "./js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]"
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
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            name: "./img/[name].[ext]"
          }
        }
      }
    ]
  }
});
