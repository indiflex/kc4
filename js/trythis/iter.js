const itObj = {
  name: 'ABCDEFG',
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        value: this.name[i++],
        done: i > this.name.length,
      }),
    };
  },
};
console.log('🚀  itObj:', [...itObj]);

const obj = {
  id: 1,
  name: 'Hong',
  [Symbol.iterator]() {
    const keys = Object.keys(obj);
    console.log('🚀  keys:', keys);
    let idx = 0;
    return {
      next() {
        return {
          value: keys[idx++],
          done: keys.length < idx,
        };
      },
    };
  },
};

// const it = obj[Symbol.iterator]();
console.log([...obj]);

console.log({ ...obj });

var a = 1;
this.a = 2;
globalThis.a = 9;
console.log(globalThis.a, this.a);

function f() {
  var x = 2;
  f.x = 3;
  console.log('f.this.a>>', this.a);
}

f = function () {
  console.log('f.this.aaaa>>', this.a);
};

f();
f.x = 5;
// console.log(f.name, f.x);

console.log('-------------');

globalThis.name = 'GlobalName';
const af = name => {
  this.name = name;
  this.if1 = function () {
    console.log('if1>>', this.name);
  };
  this.if2 = () => {
    console.log('if2>>', this.name);
  };
  return this;
};

const c = af('XXX');
c.if1();
c.if2();
const cff = c.if1;
cff();
this.if1();
console.log(this.name);

console.log('===========');
const objx = {
  name: 'ObjName',
  ofn() {
    console.log('objxf>>', this.name);
  },
};

console.log(objx.name);
objx.ofn(); // ofn
// ofn.bind(objx)();

const fff = objx.ofn;
fff();
