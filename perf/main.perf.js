const lib = require('../lib');
const $ = lib;

// console.log('no perf tests.');

var startTime = Date.now();
$(1, 1000).forEach(i => console.log);
var endTime = Date.now();
