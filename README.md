[![Build Status](https://travis-ci.org/drm2/dictionary.js.svg?branch=master)](https://travis-ci.org/drm2/dictionary.js)

# dictionary.js

A sortable Dictionary data structure for JavaScript (or Node).

## installation

You can use NPM to install this package:

```
npm install --save @drm2/dictionary.js
```

## usage

### basic (as a map)
```javascript
// include the package
var Dict = require('@drm2/dictionary.js');

var dict = new Dict();

dict.set('hello', 'world');
dict.set('cat', 'dog');
dict.set('rick', 'morty');

var message = dict.get('hello'); // returns 'world'
```

### sorting (with the built in functions)

```javascript
// using the same details from above
dict.sortByKeyAsc();

var message = dict.getAll();
```

This value of `message` will be:

```javascript
[
  { key: 'cat', value: 'dog' },
  { key: 'hello', value: 'world' },
  { key: 'rick', value: 'morty' }
]
```

### sorting (implementing a custom function)

```javascript
// using the same details from above
dict.sort(function (a, b)
{
  // sort by key ascending, and if they are equal, sort by value ascending
  if (a.key === b.key)
  {
    if (a.value === b.value) return 0;
    
    return a.value < b.value ? -1 : 1;
  }

  return a.key < b.key ? -1 : 1;
});
```
