module.exports = matrix;

// make sure people dont pass in 1 param only. throw
// maybe we dont need to recursively call matrix, and swe can call itterate instead. gets rid of the array check.
// do a lean version w/o errors.
// might wanna roll a custom reduce
function matrix(...obj) {
  var len = obj.length
  var recurse = len > 2;
  return obj[0].reduce((p, c) => {
    var result = obj[1].reduce((p1, c1, i) => {
      if (recurse) {
        p1.push(...matrix(...obj.slice(1)).map(item => [c].concat(item)));
      }
      else {
        p1.push([c, c1]);
      }
      return p1;
    }, []);
    p.push(...result);
    return p;
  }, []);

};

// var x = matrix([1], [2, 3]);
var x = matrix([1,2], [3,4], [1]);
console.log('result', x);
