module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
  },
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
};
