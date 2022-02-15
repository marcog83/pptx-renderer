const path = require('path');

const root = process.cwd();
const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp');

module.exports = {
  format:'esm',
  bundle: true,
  entryPoints: [ path.resolve(root, './packages/renderer/src/index.js') ],
  outfile: path.resolve(root, './build/build.js'),

  //   target: ["chrome58", "firefox57", "safari11", "edge16"],
  loader: {
    '.js': 'jsx',
    '.svg': 'dataurl',
    '.png': 'dataurl'
  },
  define: { global: 'window' },
  plugins: [ pnpPlugin() ],
  external: [ 'react', 'pptxgenjs' ]
};
