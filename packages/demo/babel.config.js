module.exports = {

    presets: [
      [ '@babel/preset-react', { runtime: 'automatic' }],
      [ '@babel/preset-env' ]
     
    ],
    plugins: [
       
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-syntax-top-level-await',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      [ '@babel/plugin-proposal-decorators', { legacy: true }],
      [ '@babel/plugin-proposal-class-properties', { loose: true }],
      [ '@babel/plugin-proposal-private-methods', { loose: true }],
      [ '@babel/plugin-proposal-private-property-in-object', { loose: true }],
      '@babel/plugin-transform-regenerator'
     
    ]
  };
