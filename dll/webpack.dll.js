const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, './dist/static'),
    library: '[name]_dll',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, './dist/static/[name]-manifest.json'),
      name: '[name]_dll',
    }),
  ],
};
