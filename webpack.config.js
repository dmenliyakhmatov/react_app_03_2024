const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { ProgressPlugin } = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = env => {
  const isDev = env.MODE === 'development';

  return {
    mode: env.MODE,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev
      ? {
          open: false,
          hot: true,
          port: env.mode ?? 3000,
          historyApiFallback: true,
        }
      : undefined,
    stats: 'minimal',

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true,
    },

    resolve: {
      fallback: { path: false },
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: resolve(process.cwd(), 'tsconfig.json'),
        }),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'template', 'index.html'),
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        typescript: {
          configFile: resolve(process.cwd(), 'tsconfig.json'),
        },
      }),
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].css' : '[name].[contenthash].css',
      }),
      new ReactRefreshPlugin({
        overlay: false,
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      }),
      new ProgressPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                configFile: path.resolve(process.cwd(), 'babel.config.js'),
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer],
                },
              },
            },
          ],
        },
        {
          test: /\.module\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isDev ? '[name]____[local]--[hash:base64:8]' : '[hash:base64:8]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp|ico)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true,
                svgoConfig: {
                  plugins: [{ name: 'convertColors', params: { currentColor: true } }],
                },
              },
            },
          ],
        },
      ],
    },
  };
};
