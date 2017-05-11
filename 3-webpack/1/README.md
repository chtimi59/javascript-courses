# Why WebPack ?

In this example,

```html
<html>
  <head>
    <title>webpack 2 demo</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="app/index.js"></script>
  </body>
</html>
```
where ```index.js``` is defined as follow:
```js
function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

there is an implicit dependencies. ```index.js``` depends on *lodash* which has been included in the page before. It is implicit because ```index.js``` never declared a need for lodash; it just assumes that a global variable ```_``` exists.

There are problems with managing JavaScript projects this way:

- If a dependency is missing, or is included in the wrong order, the application will not function at all.
- If a dependency is included but is not used, then there is a lot of unnecessary code that the browser has to download.

So WebPack is solution to manage ressources through a build process (which ends with packing them in an efficient way)

with Webpack the result will become:
```html
<html>
  <head>
    <title>webpack 2 demo</title>
  </head>
  <body>
    <script src="build/bundle.js"></script>
  </body>
</html>
```
