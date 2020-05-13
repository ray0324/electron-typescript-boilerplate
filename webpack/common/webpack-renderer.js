const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(entry, env) {
  const config = {
    name: 'renderer',
    target: 'electron-renderer',
    node: false,
    mode: env,
  };

  config.entry = entry;

  config.output = {
    filename: 'js/[name].js',
    chunkFilename: 'js/chunk-[name].js',
    publicPath: './',
    path: path.resolve(__dirname, '../../dist/renderer/'),
  };

  config.module = {
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
              hmr: env === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  };

  config.optimization = {
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
  };

  config.resolve = {
    // 可以在导入的时候省略后缀
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.less'],
    alias: {
      '@': path.resolve(__dirname, '../../src/renderer/'),
    },
  };

  const htmlWebpackPlugins = Object.keys(config.entry).map(key => {
    return new HtmlWebpackPlugin({
      filename: `${key}.html`,
      chunks: ['vendor', key],
      hash: true,
      template: './src/renderer/document.ejs',
    });
  });

  config.plugins = [
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash].css',
      chunkFilename: 'css/chunk-[name].css',
    }),
    ...htmlWebpackPlugins,
  ];

  config.devServer = {
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    clientLogLevel: 'none',
    // When using the HTML5 History API Fallback
    historyApiFallback: true,
    disableHostCheck: true,
    // progress: true,
    // Content not from webpack is served from
    contentBase: [path.resolve(__dirname, '../../dist')],
    // file path
    publicPath: `/renderer/`,
    headers: {
      'X-Auth-By': 'ray0324',
    },
    // api proxy
    proxy: {
      '/req': { target: 'http://localhost:81', secure: false },
    },
    stats: {
      timings: true,
      modules: false,
      assets: false,
      entrypoints: false,
      builtAt: false,
      cached: false,
      cachedAssets: false,
      children: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      chunkOrigins: false,
      performance: true,
      errors: true,
    },
  };

  return config;
};
