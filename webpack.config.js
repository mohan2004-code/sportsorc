const path = require('path');

module.exports = {
  entry: './src/index.js',  // <-- this must point to an existing file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', // or 'development'
};
