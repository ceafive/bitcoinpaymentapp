/* eslint-disable */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel", "lodash"],
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@atoms": "./src/components/atoms",
            "@molecules": "./src/components/molecules",
            "@organisms": "./src/components/organisms",
            "@constants": "./src/constants",
            "@screens": "./src/screens",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
