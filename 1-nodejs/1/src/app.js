var tst = require('./monmodule');
var markdown = require('markdown').markdown;

tst.direBonjour();

tst.direByeBye();

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));

console.log("Hello world!");