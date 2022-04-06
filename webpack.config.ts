const path = require("path");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts | tsx)$/i,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
