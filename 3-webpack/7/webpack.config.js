console.log("Hello!");

var path = require('path');

module.exports = {
  
  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  
  module: {
    rules: [      
            {
              test: /\.txt$/,
              use: ['./encapsulate-loader',  /*finally*/
                    './encapsulate-loader',  /*then*/
                    './comment-loader'       /*first*/ ]
            }
    ]
  },

  resolve: {
      modules: [
         path.join(__dirname, "node_modules"),
         path.join(__dirname, "src"),
      ]
  }
  
};