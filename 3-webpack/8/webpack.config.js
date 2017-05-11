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
              use: ['raw-loader']
            },
            {
              test: /\.css$/,
              use: ['style-loader',
                    'raw-loader']
            },
            {
              test: /\.(ico|jpe?g|png|gif)$/,
              use: ['file-loader']
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