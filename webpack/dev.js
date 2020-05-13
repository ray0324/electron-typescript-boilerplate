const main = require('./common/webpack-main');
const renderer = require('./common/webpack-renderer');

const entry = {
  login: './src/renderer/pages/Login/index.tsx',
  main: './src/renderer/pages/Main/index.tsx',
  about: './src/renderer/pages/About/index.tsx',
};

module.exports = [renderer(entry, 'development'), main('development')];
