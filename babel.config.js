module.exports = {
  env: {
    development: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: [
        "@babel/plugin-transform-runtime",
        [
          "import",
          {
            libraryName: "antd",
            libraryDirectory: "lib",
            style: true
          }
        ],
        "@babel/plugin-proposal-class-properties"
      ]
    },
    test: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties"
      ]
    }
  }
};
