const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "ipasStorybookApp",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ipasStorybookApp", // Unique name for this microfrontend
      filename: "remoteEntry.js", // Entry point for other apps to use
      exposes: {
        "./components": "./src/components",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
