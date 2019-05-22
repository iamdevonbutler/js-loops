const mergeSort = require('../lib/mergesort');
var data = [];
var i = 10000000; // 10 million
while (i--) {
  data.push(Math.round(Math.random() * 10));
}

function isSorted(original, sorted) {
  if (original.length !== sorted.length) return false;
  var last = sorted.shift();
  return sorted.every(item => {
    var result = item >= last;
    last = item;
    return result;
  });
};

function test(obj, callback) {
  var startTime = Date.now();
  var result = callback.call(null, obj);
  var endTime = Date.now();
  // if (!isSorted(data, result)) {
    // throw new Error('Not properly sorted');
  // }
  return endTime - startTime;
}

var time;
time = test(data, mergeSort);
console.log('My merge sort: ', time);

time = test(data, (data1) => {
  return data1.sort(function(a, b) {
    return a - b;
  });
});
console.log('Native sort: ', time);



///
// var startTime = Date.now();
// $(1, 1000).forEach(i => console.log);
// var endTime = Date.now();
