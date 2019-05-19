const self = module.exports;

const api = (obj) => ({
  forEach(cb) {
    obj.forEach(obj => {
      if (obj[1]) {
        while (--obj[0]) {
          cb(obj[1] - obj[0]);
        }
      }
      else {
        let count = obj[0];
        while (--obj[0]) {
          cb(count - (obj[0] + 1));
        }
      }
    });
    return self;
  },
  map() {
    return self;
  },
});

self.range = (...ranges) => {
  if (!ranges) throw new Error('param `range` not provided.');
  ranges
    .reduce((p, c) => {
      if (p.length === 0) {
        p.push([c]);
      }
      else {
        p[p.length - 1].push(c);
      }
      return p;
    }, [])
    .map(range => {
      if (range[1] === undefined) return [range[0]];
      var i = range[1] - range[0];
      if (i < 0) throw new Error('invalid range. must be greater than 0.');
      return [range[1], i];
    });
    return api(data);
};
