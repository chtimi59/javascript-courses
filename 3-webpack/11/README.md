# First Boiler-Plate

Here we integrate:

- typescript
- sass

WebPack configuration used:
(note that ```moment``` is used as example)
```js

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.root_path = path.resolve(__dirname, '../');
exports.src_path = exports.root_path +  '/src';
exports.out_path = exports.root_path +  '/build';
exports.npmPackage = require(exports.root_path+'/package.json');
exports.npmModules = exports.root_path +  '/node_modules';

exports.conf = {

    entry: {
        bundle: exports.src_path + '/index.ts',
    },

    output: {
        filename: '[name].js',
        path: exports.out_path
    },

    externals: {
        "moment": "moment"
    },
  
    module: {
       rules: [

            {
              // All files with a '.ts' or '.tsx' extension
              // will be handled by ts-loader (TODO: check benefit of 'awesome-typescript-loader')
              test: /\.tsx?$/,
              loaders: ['ts-loader']
            },
            { 
                // All output '.js' files will have any sourcemaps
                // re-processed by 'source-map-loader'.
                test: /\.js$/,
                loaders: ['source-map-loader'],
                enforce: "pre"
            },            
            {
                 // .css
                 test: /\.css$/,
                 loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                 })
            },
            {
                 // .scss
                 test: /\.s[ac]ss$/,
                 loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                 })
            },
            {
                 // image
                 test: /\.(ico|jpe?g|png|gif)$/,
                 use: ['file-loader']
            },
            {
                 //text file
                 test: /\.txt$/,
                 use: ['raw-loader']
            },
            
        ]
    },

    resolve: {      
      extensions: [".js", ".ts"]
    },

    plugins: [
       new ExtractTextPlugin('bundle.css')
    ]
}
```

