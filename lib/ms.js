module.exports = mergeSort;

var data = [2,5,6,3,1,1,7,8];

function reduce(data, callback) {
  
}

// @todo uneven data. odd.
// test slice vs splice
// compare to native sort and other merge sort.
function mergeSort(data) {
  if (data.length === 2) {
    return data[0] < data[1] ? [data[0], data[1]] : [data[1], data[0]];
  }
  else {
    let len = Math.ceil(data.length / 2);

    let first = mergeSort(data.slice(0, len));
    let second = mergeSort(data.slice(len));

    function next(p) {
      if (!first.length && second.length) {
        p = p.concat(second);
      }
      return p;
    }

    let obj = first.reduce((p, c) => {
      var rightItem = second.shift();
      if (rightItem !== undefined) {
        if (c < rightItem) {
          p.push(c);
          let temp = first.splice(0, 2)[1];
          if (temp < rightItem) {
            first.push(rightItem);
            p.push(temp);
            return next(p);
          }
          else {
            p.push(rightItem);
            return next(p);
          }
        }
        else {
          p.push(rightItem);
          let temp = second.splice(0, 2)[1];
          if (temp < c) {
            second.push(c);
            p.push(temp);
            return next(p);
          }
          else {
            p.push(c);
            return next(p);
          }
        }
      }
      else {
        p.push(c);
        return next(p);
      }
    }, []);
    return obj;
  }
}

console.log(data);
console.log([1,1,2,3,5,6,7,8]);
var result = mergeSort(data);
console.log('result');
console.log(result);
