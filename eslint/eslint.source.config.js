module.exports = {
  extends: [
    './extends/eslint.browser.config',
    './extends/eslint.module.config'
  ],
  rules: {
    'promise/catch-or-return': [
      'error', {
        allowFinally: true
      }
    ]
  }
};
