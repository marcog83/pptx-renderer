module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [ 'react' ],
  settings: {
    react: {
      version: '17.*'
    }
  },
  rules: {
    'quote-props': [ 'error', 'consistent-as-needed' ],
    'quotes': [ 'error', 'single' ],
    'prefer-destructuring': ['error', {object: true, array: false}],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }]
   }
};