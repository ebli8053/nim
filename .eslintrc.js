module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["build", ".eslintrc.js", "jest.config.js"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  root: true,
  rules: {
    "@typescript-eslint/restrict-plus-operands": "off", // makes "I am " + age + " years old" possible for combining number with string
    "@typescript-eslint/indent": "off", // eslint have other indentation rules than PKD course
    "@typescript-eslint/semi": "error",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/space-before-blocks": "warn", // helps enforce space before curly in style guide, as specified for function formatting
    "@typescript-eslint/naming-convention": ["error",
        { selector: "default", format: ["snake_case"] },
        { selector: "typeLike", format: ["PascalCase"] }],
    "@typescript-eslint/array-type": ["error", { default: 'generic' }]
  }
};
