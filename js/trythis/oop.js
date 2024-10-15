import assert from 'assert';
import '../utils/array-utils.js';
// import { isProxy } from 'util/types';

class Emp {
  firstName;
  lastName;
  constructor() {
    console.log('this>>', Object.getPrototypeOf(this));
    return new Proxy(this, {
      get(target, prop) {
        if (prop === 'fullName')
          return `${target.firstName} ${target.lastName?.toUpperCase()}`;
        return target[prop];
      },
      set(target, prop, value) {
        console.log('sssssssssssss>>', target, prop, value);
        if (prop === 'fullName')
          [target.firstName, target.lastName] = value.includes(' ')
            ? value.split(' ')
            : [target.firstName, value];
        else target[prop] = value;
        return true;
      },
    });
  }
}

const hang = new Emp();
console.log(
  'hang>>',
  hang,
  Object.getPrototypeOf(hang),
  hang.__proto__,
  Proxy.prototype,
  Emp.prototype,
  hang instanceof Emp,
  // isProxy(hang),
  hang.constructor.name
);

hang.fullName = 'Kildong Hong';
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

// -----------------------------
console.log('========================');

const origin = {};
const handler = {
  set: function (target, prop, value) {
    if (typeof value === 'number') {
      target[prop] = value * 2;
    } else {
      console.log('args>>', prop, value);
      // Reflect.set(...arguments);
      target[prop] = value;
    }
    return true;
  },
  get: function (target, prop) {
    console.log('>>', prop, target[prop], typeof target[prop]);
    if (typeof target[prop] === 'object') {
      return new Proxy(target[prop], handler);
    }
    return target[prop];
    // return Reflect.get(...arguments);
  },
};
const proxy = new Proxy(origin, handler);
console.log('🚀  proxy---->>', proxy.constructor.name);
proxy.a = 20;
proxy.b = {};
console.log('proxy.a>>>', proxy.a); // 20
console.log('proxy.b>>>', proxy.b); // {}
// console.log(':>>', isProxy(proxy));
// console.log(':>>', isProxy(proxy.a));
// console.log(':>>', isProxy(proxy.b));

proxy.b.c = 20;
console.log(proxy.b.c); // 20? 40?

function f() {
  let obj = new Object({});
  Object.defineProperty(obj, 'a', { value: 99, writable: true });
  return obj;
}

console.log('--------------------------');
const ff = new f();
console.log('🚀  ff:', ff);
ff.a = 9;
console.log('🚀  ff:', ff.constructor.name, ff.a);
