module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "no-shadow": ["error"],
    "standard/object-curly-even-spacing": [0, "either"],
    "standard/array-bracket-even-spacing": [0, "either"],
    "array-bracket-spacing": "off",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false,
      },
    ],
  },
};
