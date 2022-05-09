module.exports = {
  overrides: [
    {
      files: [ '**/__tests__/*.spec.js', '**/__tests__/*.spec.jsx' ],
      env: {
        jest: true
      },
      rules: {
        'no-magic-numbers': 'off'
      }
    }
  ]
};
