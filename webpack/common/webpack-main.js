const path = require('path');

module.exports = {
  name: 'main',
  target: 'electron-main',
  mode: 'production',
  node: false,
  entry: {
    index: './src/main/index.ts',
  },
  // watch: true,
  watchOptions: {
    ignored: '/node_modules/',
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'chunk-[name].js',
    publicPath: './',
    path: path.resolve(__dirname, '../../dist/main/'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
