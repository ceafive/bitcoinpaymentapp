module.exports = {
  plugins: ["simple-import-sort", "import"],
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: "module", // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },
  env: {
    browser: false, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "sort-imports": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    "react/react-in-jsx-scope": "off",
  },
  globals: {
    React: "writable",
    Expo: "writable",
  },
};
