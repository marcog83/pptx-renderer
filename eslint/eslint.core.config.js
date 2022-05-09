module.exports = {
  extends: [
    './extends/eslint.node.config',
    './extends/eslint.browser.config',
    './extends/eslint.module.config',
    './extends/eslint.babel.config',
    './extends/eslint.es.config',
    './extends/eslint.react.config'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-named-as-default-member': 'off'
  }
};
