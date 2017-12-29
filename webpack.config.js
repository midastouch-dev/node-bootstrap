const uglify = require('uglifyjs-webpack-plugin');

const config = {
  output: {
    filename: 'app.js'
  },
  plugins: [
    new uglify({})
  ]
};

module.exports = config;
