# trim-left [![Build Status](https://travis-ci.org/sindresorhus/trim-left.svg?branch=master)](https://travis-ci.org/sindresorhus/trim-left)

> Similar to [`String#trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) but removes only whitespace on the left


## Install

```
$ npm install --save trim-left
```


## Usage

```js
var trimLeft = require('trim-left');

trimLeft('  unicorn  ');
//=> 'unicorn  '
```


## Related

- [`trim-right`](https://github.com/sindresorhus/trim-right) - Similar to `String#trim()` but removes only whitespace on the right
- [`trim-off-newlines`](https://github.com/stevemao/trim-off-newlines) - Similar to `String#trim()` but removes only newlines


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
