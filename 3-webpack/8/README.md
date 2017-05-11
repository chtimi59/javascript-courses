# WebPack classical loaders...


## 'raw-loader'
Transform a file content into a string

```js
 module: {
    rules: [      
            {
              test: /\.txt$/,
              use: ['raw-loader']
            }
    ]
  }
```

*Index.js*:
```js
import tst from './file.txt';
console.log(tst); // show "Hello World"
```

*bundle.js will look like this*:
```js
function(module, exports) {

module.exports = "Hello World"

}
```

## 'style-loader'
Adds CSS to the DOM by injecting a ```<style>``` tag

```js
 module: {
    rules: [      
            {
              test: /\.css$/,
              use: ['style-loader',
                    'raw-loader']
            }
    ]
  }
```

*Index.js*:
```js
require('./style.css');
//or import './style.css';
```

## 'file-loader'
By default the filename of the resulting file is the MD5 hash of the file's contents with the original extension of the required resource.

```js
 module: {
    rules: [      
            {
              test: /\.(ico|jpe?g|png|gif)$/,
              use: ['file-loader']
            }
    ]
  }
```

*Index.js*:
```js
var url = require("./image.png"); // returns 7418fc9aeda031834ff42d149d7efd75.png
```

copy image.png to ./build/7418fc9aeda031834ff42d149d7efd75.png


