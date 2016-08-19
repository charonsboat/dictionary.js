[![Build Status](https://travis-ci.org/drm2/dictionary.js.svg?branch=master)](https://travis-ci.org/drm2/dictionary.js)

# dictionary.js

A sortable Dictionary data structure for JavaScript (or Node).


## usage

```javascript
// include the package
var Dict = require('dictionaryjs');

// use the dictionary
var dict = new Dict();

dict.set('hello', 'world');
dict.set('rick', 'morty');

// retrieve the value of 'hello'
var hello = dict.get('hello');
```
