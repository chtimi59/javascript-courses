const config = require('./config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.conf = {

    entry: {
        bundle: config.src_path + '/index.ts',
    },

    output: {
        filename: '[name].js',
        path: config.out_path
    },

    externals: {
       // externals third party to exclude from the build
    },
  
    module: {
       rules: [

            {
              // All files with a '.ts' or '.tsx' extension
              // will be handled by ts-loader (TODO: check benefit of 'awesome-typescript-loader')
              test: /\.tsx?$/,
              loaders: ['ts-loader', 'tslint-loader'] 
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
            }            
        ]
    },

    resolve: {      
      extensions: [".js", ".ts"]
    },

    plugins: [
       new ExtractTextPlugin('bundle.css'),
    ]
}