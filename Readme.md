# js-loops

Additional loop helpers.

**engines: node >= 9.x**

## Installation
```
npm i --save js-loops
```

## Example
```javascript
const $ = require('js-loops');

// @todo or $(1, 100).method()
$('1-100').forEach(); // Itterates from numbers 1 to 100.
$('1-100,1000-2000').forEach();
```

## API

You create a loop by providing a "loop type" and chaining a method(s).

```javascript
const $ = require('js-loops');

$('`LOOP_TYPE`').`METHOD_NAME`();
```

### Loop types (input)
- Range loops


### Methods
- `.forEach()`
- `.map()`
- `.filter()`
- `.reduce()`
- `.reduceRight()`
- `.every()`
- `.some()`
- `.indexOf()`
- `.lastIndexOf()`
- `.find()`
- `.findIndex()`
- `.includes()`

## License

MIT
