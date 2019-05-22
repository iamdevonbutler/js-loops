module.exports = matrix;

// var matrix = [ [1, 2], [3, 4], [7] ];
// 1, 3, 7
// 1, 4, 7
// 2, 3, 7
// 2, 4, 7

// make sure people dont pass in 1 param only. throw
// maybe we dont need to recursively call matrix, and swe can call itterate instead. gets rid of the array check.

function matrix(...data) {
  var lastParam, callback;
  lastParam  = data[data.length - 1];
  if (!Array.isArray(lastParam)) callback = data.pop();
  function itterate(obj) {
    return obj[0].reduce((p, c) => {
      var result = obj[1].reduce((p1, c1, i) => {
        var result1, len = obj.length;
        if (len === 2) {
          result1 = [c].concat(obj[1][i]);
          p1.push(result1);
        }
        else {
          result1 = matrix(...obj.slice(1)).map(item => [c].concat(item));
          p1.push(...result1);
        }
        return p1;
      }, []);
      p.push(...result);
      return p;
    }, []);
  }
  return itterate(data);
};

var x = matrix([1,2], [3,4], [1]);
console.log('result',x);
