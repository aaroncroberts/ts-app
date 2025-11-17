module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    'docs-site/**/*', // Docs site has its own ESLint config
    'node_modules/**/*',
    'dist/**/*',
    'coverage/**/*',
  ],
  rules: {
    // Add any custom rules here
  },
};
