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


$(10).forEach(i => console.log);
$(1, 1000).forEach(i => console.log);
$(1, 1000, 2000, 3000).forEach(i => console.log);

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
