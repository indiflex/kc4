const assert = require('assert');

const arr = [1, 2, 3, 4];

const push = (arr, ...args) => [...arr, ...args];

const pop = (arr, cnt = 1) => (cnt === 1 ? arr.at(-cnt) : arr.slice(-cnt));

const unshift = (arr, ...args) => [...args, ...arr];

// [shift되는 원소들, 남은 원소들]
const shift = (arr, cnt = 1) => [arr.slice(0, cnt), arr.slice(cnt)];

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
assert.deepStrictEqual(pop(arr, 3), [2, 3, 4]); // 2개 팝!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]);
assert.deepStrictEqual(shift(arr, 2), [
  [1, 2],
  [3, 4],
]); // 2개 shift
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

// ----------------------
const deleteArray = (arr, startOrKey, endOrValue = Infinity) => {
  if (!arr || !Array.isArray(arr)) return [];

  // end = end ?? arr.length - 1;
  if (typeof startOrKey === 'number')
    return arr.filter((_, idx) => idx < startOrKey || idx >= endOrValue);

  return arr.filter(a => a[startOrKey] !== endOrValue);
};
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
let users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);

// ----------------------------------
const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
users = [kim, lee, park]; // 오염되면 안됨!!

// users.addUser = function (user) {
//   return [...this, user];
// };
// Object.defineProperty(users, 'addUser', { enumerable: false });
Object.defineProperties(users, {
  addUser: {
    value: function (user) {
      return [...this, user];
    },
  },
});

assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

users.removeUser = function (user) {
  return this.filter(({ id }) => id !== user.id);
};
Object.defineProperty(users, 'removeUser', { enumerable: false });
assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

users.changeUser = function (before, after) {
  return this.map(user => (user.id === before.id ? after : user));
};
Object.defineProperty(users, 'changeUser', { enumerable: false });

assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

console.log('🚀  users:', users);

// -----------------------------------
const arr2 = [1, 2, 3, true];
// const ret0 = arr2.map(a => a?.toString());
// const ret1 = arr2.map(a => String(a));
const ret1 = arr2.map(String);
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

// const classNames = (...args) => args.filter(a => a).join(' ');
// const classNames = (...args) => args.filter(a => Boolean(a)).join(' ');
const classNames = (...args) => args.filter(Boolean).join(' ');
// const classNames = (...args) => args.map(String).filter(Boolean).join(' ');
const ret2 = classNames('', 0, 'a b c', 'd', null, '', undefined, 'e');
console.log(`🚀  ret2: "${ret2}"`);
assert.strictEqual(ret2, 'a b c d e');

// ---------------------------------------
const reduce = (arr, fn, initValue) => {
  // let startIdx = 0;
  let i = 0;
  let acc = initValue ?? (i++, arr[0]);
  for (; i < arr?.length; i += 1) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};
const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);
assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur),
  a10.reduce((acc, cur) => acc + cur)
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

// ---------------------------------
const square = n => n ** 2;
const sqrt = n => Math.sqrt(n);
const cube = n => n ** 3;

arr.push(5); // [1, 2, 3, 4, 5]
const xr1 = arr.map(square).map(sqrt).map(cube);
assert.deepStrictEqual(xr1, [1, 8, 27, 64, 125]);

const xr2 = [square, sqrt, cube].reduce((acc, fn) => arr.map(fn));
console.log('🚀  xr2:', xr2);

const xr3 = arr.map(a => [cube, square, sqrt].reduce((acc, fn) => fn(acc), a));
console.log('🚀  xr3:', xr3);
const xr4 = arr.map(a =>
  [square, cube, n => n + 1].reduce((acc, fn) => fn(acc), a)
);
console.log('🚀  xr4:', xr4);

// -------------------------------------
console.log('==========================');
const keyPairBigO_n2 = (arr, n) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) return [i, j];
    }
  }
};

const keyPair = (arr, n) => {
  console.log('🚀 keyPair > arr:', arr, n);
  const cache = {}; // {7-1: 0, 7-3: 1, 7-4: 2}
  for (let i = 0; i < arr.length; i += 1) {
    console.log(i, '🚀  cache:', cache);
    const k = arr[i];
    if (k in cache) return [cache[k], i];
    cache[n - arr[i]] = i;
  }
};
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
return;
const kr1 = keyPair([1, 6, 3, 4, 5], 7);
console.log('🚀  kr1:', kr1);
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [1, 5]);
// assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
