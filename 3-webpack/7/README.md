# WebPack modules rules

let's simplify *Index.js*:
```js
import 'file.txt';
```

by adding the following rule in webpack.config.js, we explictly defined the pipeline rule for txt files:
```js
 module: {
    rules: [      
            {
              test: /\.txt$/, /*regex*/
              use: ['./encapsulate-loader',  /*finally*/
                    './encapsulate-loader',  /*then*/
                    './comment-loader'       /*first*/ ]
            }
    ]
  }
```

after compilation ```bundle.js``` look like this:
```js
function(module, exports) {

/*IN*//*IN*//*Hello World*//*OUT*//*OUT*/

/***/ }
```