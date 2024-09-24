import type { StorybookConfig } from "@storybook/react-webpack5";
import webpack from "webpack";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // Add custom Webpack configuration to include Module Federation
  webpackFinal: async (config) => {
    config?.plugins?.push(
      new webpack.container.ModuleFederationPlugin({
        name: "ipasStorybookApp",
        filename: "remoteEntry.js", // This will generate the remoteEntry.js file
        exposes: {
          "./components/Button": "./src/components/Button/Button.tsx",
          "./components/UserTable": "./src/components/UserTable/UserTable.tsx",
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: "^18.2.0" },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: "^18.2.0",
          },
        },
      })
    );

    return config;
  },
};

export default config;
