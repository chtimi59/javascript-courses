# Production/Development
Let's clean the build process a little

# Split webpack.config.js in serverals files

Our *webpack.config.js* mays look this:
```js
module.exports = function(env) {
   return require(`./.webpack/${env}.js`).conf;
}
```

hence our *package.json* mays look like this:
```json
  "scripts": {
    "build:dev": "webpack --env=dev --progress --profile --colors",
    "build:prod": "webpack --env=prod --progress --profile --colors",
    "clean": "rimraf dist/{css/*,js/*,images/*}"
  } 
```

that's brings us *.webpack/dev.js* and *.webpack/prod.js*

here is how dev (for development) mays looks:
```js
console.log("Development Mode");

const merge = require('webpack-merge');
const com = require('./common.js');
exports.conf = merge(com.conf, {

  devtool: 'source-map', 

  plugins: [

      /* webpack option */    
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true
      }),

    ]  
});
```
which brings to have a *.webpack/common.js*
which may look like this:

```js
const Path = require('path');
exports.root_path = path.resolve(__dirname, '../');
exports.src_path = exports.root_path +  '/src';
exports.out_path = exports.root_path +  '/dist';
exports.conf = {

    entry: {
        bundle: exports.src_path + '/index.js',
    },

    output: {
        filename: '[name].js',
        path: exports.out_path
    },

}
```

You can notice the usage of **webpack-merge** which helps to merge configuration.


# Defining globals in your js code

By using **DefinePlugin** you can replace pattern in your js sources, hence with this,

```js
plugins: [
      
      new webpack.DefinePlugin({
           __PROD__: JSON.stringify(false),
           __VERSION__: JSON.stringify('1.0.2'),
      })
]
```

you can write this:

```js
if (!__PROD__) {
   console.log('This app is version ' + __VERSION__);
}
```

*Note: it should be a good idea to extract these information from package.json*