module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  root: true,

  // the ignorePatterns list all files and folder you don't want linted
  ignorePatterns: ["build", ".eslintrc.js", "jest.config.js"],

  // This rule set correspond quite well to the style guide used in the PKD course
  rules: {
    // makes "I am " + age + " years old" possible for combining number with string
    "@typescript-eslint/restrict-plus-operands": "off", 

    // eslint have other indentation rules than PKD course, so you must check that manually
    "@typescript-eslint/indent": "off", 

    // end line with semicolons
    "@typescript-eslint/semi": "error",

    // if the type is "obvious" tothe compiler, you may as well skip the type declaration
    "@typescript-eslint/no-inferrable-types": "warn",

    // all functions must have explicit return types
    "@typescript-eslint/explicit-function-return-type": "error",

    // do put a blankspace before curly braces (e.g. in function definitions and if-else-clauses
    "@typescript-eslint/space-before-blocks": "warn", 

    // use correct naming conventions
    "@typescript-eslint/naming-convention": ["error",
        { selector: "default", format: ["snake_case"] },
        { selector: "typeLike", format: ["PascalCase"] }],

    // use Array<T> rather than T[]
    "@typescript-eslint/array-type": ["error", { default: 'generic' }]
  }
};
