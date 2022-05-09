const JSX_INDENT_ERROR = 2;

const JSX_INDENT_PROPS_ERROR = 4;

module.exports = {
  plugins: [ 'react' ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      pragma: 'React'
    }
  },
  rules: {
    'jsx-quotes': [ 'error', 'prefer-double' ],
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'off',
    'react/default-props-match-prop-types': [ 'error', { allowRequiredDefaults: false }],
    'react/destructuring-assignment': 'off',
    'react/display-name': [ 'error', { ignoreTranspilerName: false }],
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-prop-types': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'off',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': [ 'error', { ignoreStateless: true }],
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-typos': 'error',
    'react/no-string-refs': 'off',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': [ 'error', 'always' ],
    'react/prefer-stateless-function': [ 'error', { ignorePureComponents: true }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': [ 'off', { forbidDefaultForRequired: true }],
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': [ 'error', { component: true, html: true }],
    'react/sort-comp': [
      'off', {
        order: [
          'static-properties',
          'constructor',
          'static-methods',
          '/^handle.+$/',
          'lifecycle-methods',
          'rendering',
          'everything-else'
        ],
        groups: {
          'rendering': [
            '/^render.+$/',
            'render'
          ],
          'static-properties': [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'state',
            'defaultProps'
          ],
          'lifecycle-methods': [
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'react/sort-prop-types': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    'react/jsx-boolean-value': 'off',
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': [ 'error', 'after-props' ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
        children: true,
        spacing: { objectLiterals: 'never' }
      }
    ],
    'react/jsx-equals-spacing': [ 'error', 'never' ],
    'react/jsx-filename-extension': [ 'error', { extensions: [ '.js', '.jsx', '.ts', '.tsx' ] }],
    'react/jsx-first-prop-new-line': [ 'error', 'never' ],
    'react/jsx-handler-names': [
      'error',
      { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' }
    ],
    'react/jsx-indent': [ 'error', JSX_INDENT_ERROR ],
    'react/jsx-indent-props': [ 'error', JSX_INDENT_PROPS_ERROR ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [ 'error', { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': [ 'error', { allowGlobals: true }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-brace-presence': [ 'error', 'ignore' ],
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': [
      'error',
      { noSortAlphabetically: true, callbacksLast: true }
    ],
    'react/jsx-tag-spacing': [
      'error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ]
  }
};
