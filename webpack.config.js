const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const fs = require('fs');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const css = require('./webpack/css');
const sourceMap = require('./webpack/sourceMap');
const lintJS = require('./webpack/js.lint');
const lintCSS = require('./webpack/sass.lint');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const babel = require('./webpack/babel');
const favicon = require('./webpack/favicon');

const PATHS = {
  source: path.join(__dirname, 'dev'),
  build: path.join(__dirname, 'build'),
};

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    // const extension = parts[1];
    const extension = 'pug';
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}/${name}.${extension}`),
      inject: true,
    });
  });
}

const htmlPages = generateHtmlPlugins('./dev/pages');

const common = merge([
  {
    entry: {
      main: `${PATHS.source}/app/main.js`,
    },
    output: {
      path: PATHS.build,
      filename: './js/[name].js?[hash]',
    },
    plugins: [
      new webpack.ProvidePlugin({
        Promise: 'es6-promise-promise',
      }),
      new Dotenv(),
      new WriteFilePlugin(),
      new CopyPlugin([
        {
          from: 'dev/**/*.jpg',
          to: 'images/',
          flatten: true,
        },
        {
          from: 'dev/**/*.jpeg',
          to: 'images/',
          flatten: true,
        },
        {
          from: 'dev/**/*.png',
          to: 'images/',
          flatten: true,
        },
        {
          from: 'dev/**/*.svg',
          to: 'images/',
          // test: /([^/]+)\/(.+)\.(jpg|png|svg)$/,
          flatten: true,
        },
        {
          from: 'dev/**/*.pdf',
          to: 'documents',
          flatten: true,
        },
        {
          from: 'dev/**/*.docx',
          to: 'documents',
          flatten: true,
        },
        {
          from: 'dev/app/libs/**/*.js',
          to: 'js',
          flatten: true,
        },
      ]),
    ].concat(htmlPages),
    optimization: {
      // splitChunks: {
      //   cacheGroups: {
      //     common: {
      //       minChunks: 2,
      //       chunks: 'all',
      //       name: 'common',
      //       priority: 10,
      //       enforce: true,
      //     },
      //     styles: {
      //       name: 'styles',
      //       test: /\.css$/,
      //       chunks: 'all',
      //       enforce: true,
      //     },
      //   },
      // },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
  },
  pug(),
  // lintJS({ paths: PATHS.sources }),
  // lintCSS(),
  images(),
  fonts(),
  babel(),
]);

module.exports = function(env, argv) {
  if (argv.mode === 'production') {
    return merge([common, extractCSS()]);
  }
  if (argv.mode === 'development') {
    return merge([common, devserver(), sass(), css(), sourceMap()]);
  }
};

// module.exports = function(env, argv) {
//   if (argv.mode === 'production') {
//     return merge([common, extractCSS(), sourceMap()]);
//   }
//   if (argv.mode === 'development') {
//     return merge([common, devserver(), sass(), css(), sourceMap()]);
//   }
// };
