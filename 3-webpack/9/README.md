# Code Splitting
Code splitting is one of the most compelling features of webpack. It allows you to split your code into various bundles which you can then load on demand — like when a user navigates to a matching route, or on an event from the user. This allows for smaller bundles, and allows you to control resource load prioritization, which if used correctly, can have a major impact on your application load time.

# CSS splitting
This kind of splitting is independent from application logic. The some usage of is to avoid [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) effect. What we are doing here is to extract text from Webpack chunk with the **ExtractTextWebpackPlugin**

```js
import 'style.css';
```

```js
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    
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

  /* global plugins */
  plugins: [
        new ExtractTextPlugin('bundle.css')
  ]    
}
```
At the end we get a bundle.css file

# Vendor code splitting
A typical application can depend on many third party libraries for framework/functionality needs. Unlike application code, code present in these libraries does not change often. If we keep code from these libraries in its own bundle, separate from the application code, we can leverage the browser's caching mechanism to cache these files for longer durations on the end user's machine.

```js
import('./mylib');
import moment from 'moment';
myPrint(moment().format());
```

```js
entry: {
    bundle: './src/index.js',
    thirdparties: ['lodash', 'moment'], /* commontly nammed 'vendor' */
    otherThings: './src/mylib.js',
  },

  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
  },
```

At the end we get a bundle.js, a thirdparties.js and a otherThings.js

Note: here bundle.js contains common code with thirdparties.js and a otherThings.js, this where **CommonsChunkPlugin**
can help to filter out(extract) the common code.

[https://webpack.js.org/guides/code-splitting-libraries/](https://webpack.js.org/guides/code-splitting-libraries/) to see how to fine tune your webpack.config.js

One other way is to exclude some library from webpack management

```js
 /* exclude somes files */
  externals: {
        "moment": "moment"
  },
```


# On demand code-splitting
split your bundle into chunks which can be downloaded asynchronously at a later time. For instance, this allows to serve a minimal bootstrap bundle first and to asynchronously additional features later.

webpack supports two similar techniques to achieve this goal: using import() (preferred, ECMAScript proposal) and require.ensure() (legacy, webpack specific).

example:
```js
function determineDate() {
  import('moment').then(function(moment) {
    console.log(moment().format());
  }).catch(function(err) {
    console.log('Failed to load moment', err);
  });
}

determineDate();
```

[https://webpack.js.org/guides/code-splitting-async/](https://webpack.js.org/guides/code-splitting-async/)