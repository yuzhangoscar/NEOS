module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['node_modules/', 'playwright-report/', 'test-results/', 'allure-results/'],
  overrides: [
    {
      files: ['tests/**/*.ts'],
      plugins: ['playwright'],
      extends: ['plugin:playwright/recommended'],
    },
  ],
};
