module.exports = {

  presets: [
    [
      '@babel/preset-env', {
        targets: {
          esmodules: false,
          browsers: [ 'last 2 versions' ] }
      }
    ],
    [ '@babel/preset-react', { runtime: 'automatic' }]
  ],
  assumptions: {
    setPublicClassFields: true,
    noDocumentAll: true,
    noClassCalls: true,
    iterableIsArray: true,
    ignoreToPrimitiveHint: true,
    enumerableModuleMeta: true,
    constantReexports: true

  },
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    [ '@babel/plugin-proposal-decorators', { legacy: true }],
    [ '@babel/plugin-proposal-class-properties' ],
    [ '@babel/plugin-proposal-private-methods' ],
    [ '@babel/plugin-proposal-private-property-in-object' ],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
        corejs: 3
      }
    ]

  ]
};
