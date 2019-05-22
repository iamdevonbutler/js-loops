module.exports = mergeSort;

// var data = [2,5,6,3,1,1,7,8];

function reduce(obj, callback, p = []) {
  function itterate(obj, callback1, p) {
    let c = obj.shift();
    p = callback1.call(null, p, c);
    if (obj.length) {
      return itterate(obj, callback1, p);
    }
    return p;
  }
  return itterate(obj, callback, p);
}

function mergeSort(data) {
  // data = data.slice();
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

    let result = reduce(first, (p, c) => {
      var rightItem = second.shift();
      if (!first.length) {
        if (c < rightItem) {
          p.push(c);
          p.push(rightItem);
        }
        else {
          p.push(rightItem);
          p.push(c);
        }
        return p;
      }
      if (rightItem !== undefined) {
        if (c < rightItem) {
          p.push(c);
          let temp = first.shift();
          if (temp < rightItem) {
            first.push(rightItem);
            p.push(temp);
            return next(p);
          }
          else {
            first.unshift(temp);
            p.push(rightItem);
            return next(p);
          }
        }
        else {
          p.push(rightItem);
          let temp = second.shift();
          if (temp < c) {
            second.push(c);
            p.push(temp);
            return next(p);
          }
          else {
            second.unshift(temp);
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
    return result;
  }
}

// console.log(data);
// console.log([1,1,2,3,5,6,7,8]);
// var result = mergeSort(data);
// console.log('result');
// console.log(result);
