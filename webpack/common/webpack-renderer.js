const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entry = {
  login: './src/renderer/pages/Login/index.tsx',
  main: './src/renderer/pages/Main/index.tsx',
  about: './src/renderer/pages/About/index.tsx',
};

const output = {
  filename: 'js/[name].js',
  chunkFilename: 'js/chunk-[name].js',
  publicPath: './',
  path: path.resolve(__dirname, '../../dist/renderer/'),
};

console.log(path.resolve(__dirname, '../../src/renderer/'));

module.exports =  {
  name: 'renderer',

  target: 'electron-renderer',

  mode: 'production',
  node: false,

  entry: entry,

  output: output,

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
      {
        test: /\.(svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/[name]-[hash:4].[ext]',
              limit: 6144, // 6k
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },

  optimization: {
    runtimeChunk: false,
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 3,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
          test: /\.(js|ts)x?$/,
          name: 'vendor',
          chunks: 'all',
          minChunks: 2,
          enforce: true,
        },
        styles: {
          name: 'vendor',
          test: /\.(css|less)$/,
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },

  resolve: {
    // 可以在导入的时候省略后缀
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.less'],
    alias: {
      '@': path.resolve(__dirname, '../../src/renderer/'),
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/chunk-[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      chunks: ['vendor', 'main'],
      hash: true,
      title: 'main',
      template: './src/renderer/document.ejs',
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      chunks: ['vendor', 'login'],
      hash: true,
      title: 'login',
      template: './src/renderer/document.ejs',
    }),
  ],
};