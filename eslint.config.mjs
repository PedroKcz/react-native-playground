import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    settings: {
      react: {
        version: 'detect',
      }
    },
    files: ["**/*.{js,ts,jsx,tsx, mjs}"],
    plugins: {
      reactPlugin,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
];
