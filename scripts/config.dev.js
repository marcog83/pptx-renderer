const config = require('./config.common');

module.exports = Object.assign(config, {
  watch: {
    onRebuild(error) {
      if (error) {
        console.error('watch build failed:', error);
      } else {
        console.log('watch build succeeded.');
      }
    }
  },
  define: Object.assign(config.define, {
    'process.env.NODE_ENV': '"development"'
  })
});
