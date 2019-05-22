module.exports = matrix;

function isFunction(obj) {
  var tag = Object.prototype.toString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
};
// var matrix = [ [1, 2], [3, 4], [7] ];
// 1, 3, 7
// 1, 4, 7
// 2, 3, 7
// 2, 4, 7
// flatreduce



function matrix(...data) {
  var lastParam, callback;
  lastParam  = data[data.length - 1];
  if (isFunction(lastParam)) {
    callback = data.pop();
  }
// @todo try w/ map
  function itterate(obj) {
    return obj.reduce((p, c) => {  // returns [[], []]
      var result = c.reduce((p1, c1) => { // returns []
        var result1 = c.length === 1 ? c : c1.concat(...matrix(...c.slice(1)));
        p1.push(...result1);
        return p1;
      }, []);
      p.push(result);
      return p;
    }, []);
  }

  return itterate(data);
};

var x = matrix([1,2], [3,4]);
console.log('result',x);

// var data = [], i = 100;
// while(i--) {
//   let data1 = [], ii = 100;
//   while (ii--) {
//     data1.push(Math.random() * 10);
//   }
//   data.push(data1);
// }
