Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(val) {
      this[0] = val;
    },
  },
  lastObject: {
    get() {
      return this.at(-1);
    },
    set(val) {
      // this.with(-1, val); // pure function!
      this[this.length - 1] = val;
    },
  },
});

Array.prototype.mapBy = function (prop) {
  return this.map(a => a[prop]);
};

Array.prototype.filterBy = function (key, val, isInclude = false) {
  return this.filter(a => (isInclude ? a[key]?.includes(val) : a[key] === val));
};

Array.prototype.rejectBy = function (key, val, isInclude = false) {
  return this.filter(a =>
    isInclude ? !a[key]?.includes(val) : a[key] !== val
  );
};

Array.prototype.findBy = function (key, val) {
  return this.find(a => a[key] === val);
};

Array.prototype.sortBy = function (condition) {
  const [prop, direction = 'asc'] = condition.split(':');
  const dir = direction === 'desc' ? -1 : 1;

  return this.sort((a, b) => (a[prop] > b[prop] ? dir : -dir));
};
