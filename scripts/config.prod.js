const config = require('./config.common');

module.exports = Object.assign(config, {
  minify: true,
  define: Object.assign(config.define, {
    'process.env.NODE_ENV': '"production"'
  })
});
