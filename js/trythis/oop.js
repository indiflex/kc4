const assert = require('assert');

class Emp {
  firstName;
  lastName;
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        if (prop === 'fullName')
          return `${target.firstName} ${target.lastName?.toUpperCase()}`;
        return target[prop];
      },
      set(target, prop, value) {
        if (prop === 'fullName')
          [target.firstName, target.lastName] = value.includes(' ')
            ? value.split(' ')
            : [target.firstName, value];
        else target[prop] = value;
      },
    });
  }
}

const hang = new Emp();
hang.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
// console.log('fn=', hang.fullName); // 'Kildong HONG' 출력하면 통과!
// console.log('f,l=', hang.firstName, hang.lastName); // 'Kildong HONG' 출력하면 통과!
hang.fullName = 'Lee';
hang.fullName = 'Kildong Hong';
assert.strictEqual(hang.fullName, 'Kildong HONG');
hang.fullName = 'Lee';
assert.strictEqual(hang.fullName, 'Kildong LEE');

// -------------
const hong = { id: 1, name: 'Hing' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const users = [hong, lee, kim];

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

const arr = [1, 2, 3, 4, 5];
assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy('name'), ['Hing', 'Lee', 'Kim']);
assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
assert.deepStrictEqual(users.filterBy('name', 'i', true), [hong, kim]); // key, value일부, isInclude

assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy('name', 'i', true), [lee]);
assert.deepStrictEqual(users.findBy('name', 'Kim'), kim);
assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee]);

assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, lee);
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
// console.log('🚀  users:', users);
assert.deepStrictEqual(users.lastObject, hong);
