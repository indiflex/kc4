let a = 1;
let b = 2;
let c = (a++, b++);
let d = (a--, b + a);
console.log(a, b, c, d);

d = void (c = a + b);
console.log(a, b, c, d);
console.log('------------------------');
const arr = [undefined, null, false, 0, NaN, '', []];

for (const a of arr) {
  console.log(a, '==>', !!a);
}

Math.round(4.5, 2);
const n = 123.45;
Math.trunc(n);

console.log('--------------------------');
const obj = { id: 1, name: 'Hong', addr: 'Seoul' };
const { id, ...rest } = obj;
console.log(rest);
const sym = Symbol();
obj[sym] = 123;
console.log('🚀  obj:', obj);
delete obj.id;
delete obj;
console.log('🚀  obj:', obj);
console.log('🚀  obj:', Object.keys(obj));
console.log('🚀  obj:', Reflect.ownKeys(obj));

let k = 'id';
console.log('id' in obj, k in obj);
console.log(sym in obj);
console.log(obj instanceof Object);
console.log(new Object(n) instanceof Object);
console.log(new Number(n) instanceof Object);
console.log(new Number(n) instanceof Number);

console.log('----============------');
class Animal {
  age = 3;
  nm = 'Animal';
  static sm() {
    return 'SM';
  }
  nsm() {
    return 'NSM';
  }
}
class Dog extends Animal {
  constructor(nm) {
    super();
    this.nm = nm;
  }
}
Dog.sm = function () {
  return 'DSM';
};
Dog.prototype.nsm = function () {
  return 'DogNSM';
};
const ani = new Animal();
const maxx = new Dog('Maxx');
console.log('sm>>', Animal.sm(), Dog.sm(), maxx.__proto__.nsm());
console.log('nsm>>', maxx.nsm(), ani.nsm());
console.dir(Dog.prototype);
const ttt = Object.getPrototypeOf(Dog);
console.log('🚀  ttt:', ttt);
console.log(maxx instanceof Dog);
console.log(maxx instanceof Animal);

console.log('========================');
function ff(a, b, ...c) {
  console.log(a, b, c, ...c);
}
delete ff;
delete globalThis.ff;
ff(1, 2, 3, 4, 5);

console.log('========================');
let x = 1;
function cond1() {
  let result;
  if (x === 1) {
    return 'one';
  } else if (x === 2) {
    return 'two';
  } else if (x === 3) {
    return 'three';
  } else {
    return 'etc';
  }
}
console.log('🚀  cond1:', cond1());
function cond2() {
  let result;
  if (x === 1) return 'one';
  if (x === 2) {
    return 'two';
  }
  if (x === 3) {
    return 'three';
  }
  return 'etc';
}
console.log('🚀  cond2:', cond2());

function cond3(x) {
  let result;
  switch (x) {
    case 1:
      result = 'one';
      break;
    case 2:
      result = 'two';
      break;
    //...
    default:
      result = 'etc';
  }
  return result;
}
console.log('🚀  cond3:', cond3(2));
console.log('🚀  cond3:', cond3(1));
function cond4(x) {
  switch (x) {
    case 1: {
      const y = x + 1;
      return 'one';
    }
    case 2:
      return 'two';
    //...
    default:
      return 'etc';
  }
}

console.log('🚀  cond4:', cond4(2));
// for (; ;) {
while (true) {
  x += 1; // x = x + 1;
  if (x > 10) break;
  if (x % 2 !== 0) continue;
  console.log(x);
}

// console.log('+++++++++++++++++++');

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

while (i > 0) i -= 1;
console.log(i);
