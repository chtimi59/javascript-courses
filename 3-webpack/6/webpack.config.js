console.log("Hello!");

var path = require('path');

module.exports = {
  
  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  
  resolve: {
      modules: [
         path.join(__dirname, "node_modules"),
         path.join(__dirname, "src"),
      ]
  }
 
};