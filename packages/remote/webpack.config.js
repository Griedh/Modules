const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "auto"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./helloWorld": "./src/hello-world.ts"
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
};
