console.log("Hello!");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  
  entry: {
    bundle: './src/index.js',
  },

  /* exclude somes files */
  externals: {
        "moment": "moment"
  },

  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build')
  },
  
  module: {
     rules: [     
       {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "raw-loader",
            })
        }
    ]
  },

  resolve: {
      modules: [
         path.join(__dirname, "node_modules"),
         path.join(__dirname, "src"),
      ]
  },

  /* global plugins */
  plugins: [
        new ExtractTextPlugin('bundle.css')
  ]  
};