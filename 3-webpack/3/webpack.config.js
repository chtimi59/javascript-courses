console.log("Hello!");

var path = require('path');

console.log(path.resolve(__dirname, 'build'));

module.exports = {
  entry: [ './app/index.js' ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};