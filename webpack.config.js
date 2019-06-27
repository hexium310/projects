const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loaders = {
  typescript: {
    loader: 'ts-loader',
  },
  yaml: {
    loader: 'js-yaml-loader',
  },
};

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: loaders.typescript,
      },
      {
        test: /.yaml$/,
        exclude: /node_modules/,
        use: loaders.yaml,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
