module.exports = {
  extends: [ './eslint.module.config' ],
  env: {
    node: true,
    commonjs: true
  },
  rules: {
    'no-buffer-constructor': 'error',

    'node/callback-return': 'off',
    'node/handle-callback-err': 'error',
    'node/no-path-concat': 'error',
    'node/no-sync': 'off'
  }
};
