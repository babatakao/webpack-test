const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index.js'),
  devServer: {
    static: {
      directory: 'dist',
    },
  },
};