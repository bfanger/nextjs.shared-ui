const path = require('path')

module.exports = {
  mode: 'none',
  context: __dirname,
  entry: {
    index: { import: './index.ts' },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'ui.bundle.min.js',
    path: path.resolve(__dirname, 'build'),
    library: 'nextUI',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      '@react': path.resolve(__dirname, '.'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
