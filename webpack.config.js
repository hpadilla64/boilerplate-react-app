const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const lessToJs = require("less-vars-to-js");

module.exports = (env, args) => {
  const prod = args.mode === "production";

  const themeVariables = lessToJs(
    fs.readFileSync(
      path.join(__dirname, "./src/styles/custom-ant.less"),
      "utf8"
    )
  );
  // themeVariables["@icon-url"] = "'/main/styles/fonts/iconfont'";

  return {
    mode: args.mode,
    context: path.resolve(__dirname),
    target: "web",
    watch: prod === false,
    entry: ["./src/index.jsx"],
    output: {
      path: path.resolve(__dirname, "./public/js/apps"),
      filename: prod ? "app-name.min.js" : "app-name.js"
    },
    resolve: {
      modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
      extensions: [".js", ".jsx"]
    },
    devServer: {
      contentBase: path.resolve(__dirname, "./public"),
      filename: "app-name.js",
      open: true,
      writeToDisk: true,
      compress: true,
      port: 8080
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true,
                modifyVars: themeVariables
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        }
      ]
    },
    optimization: {
      minimizer: prod
        ? [
            new TerserPlugin({
              parallel: true,
              terserOptions: {
                comments: false,
                compress: {
                  // remove warnings
                  warnings: false,
                  // Drop console statements
                  drop_console: true
                }
              }
            })
          ]
        : []
    },
    plugins: prod
      ? [
          new webpack.DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify(args.env.NODE_ENV)
            }
          }),
          new webpack.ContextReplacementPlugin(
            /moment[\\/]locale$/,
            /^\.\/(en|es)$/
          )
        ]
      : [
          new webpack.DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify(args.env.NODE_ENV)
            }
          })
        ]
  };
};
