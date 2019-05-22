module.exports = matrix;

// make sure people dont pass in 1 param only. throw
// maybe we dont need to recursively call matrix, and swe can call itterate instead. gets rid of the array check.
// do a lean version w/o errors.

function matrix(...obj) {
  var len = obj.length;

  if (len < 2) throw new Error(`Please provide at least 2 params of type Array.`);

  function generate(obj1, recurse = false) {
    return obj1[0].reduce((p, c) => {
      var result = obj1[1].reduce((p1, c1, i) => {
        if (recurse) {
          p1.push(...matrix(...obj1.slice(1)).map(item => [c].concat(item)));
        }
        else {
          p1.push([c, c1]);
        }
        return p1;
      }, []);
      p.push(...result);
      return p;
    }, []);
  }

  return generate(obj, len > 2);
};

// var x = matrix([1], [2, 3]);
var x = matrix([1,2], [3,4], [1]);
console.log('result', x);
