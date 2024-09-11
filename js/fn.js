function f() {
  console.log('constructor=', f.constructor)
  console.log('f.name=', f.name);
  console.log('f.length=', f.length);
  console.log('arguments=', arguments);
  console.log('new.target=', new.target);
}

new f(1, 2, 3);

const af = () => {
  console.log('af.name=', af.name);
  console.log('af.length=', af.length);
  console.log('arguments=', arguments);
  console.log('new.target=', new.target);
}

af(1, 2, 3);

// ------------------------------
const Dog = function (name) {
  // constructor ==> this
  console.log(name, '==>', this, new.target,
              this instanceof Dog);
  this.name = name;
  this.bark = function () {
    console.log('bark=', new.target, this.name, name);
  };
  this.bark2 = () =>
    console.log('bark2=', new.target, this.name, name);
}

const dog = Dog('Doggy');
const lucy = new Dog('Lucy');
console.log(Dog.bark); // ?
console.log('======================')
lucy.bark(); // ?
console.log('**********************')
lucy.bark2(); // ?
console.log('type=', typeof dog); // ?
console.log('type=', typeof lucy); // ?

console.log('+++++++++++++++++++++');

class Cat {
  constructor(name) {
    // super(name);
    this.name = name;
  }

  bark() {
    console.log('miyao~', this.name);
  }

  bark2 = () => {
    console.log('miyao~', this.name);
  };
}

const naavi = new Cat('Naavi');
console.log('🚀  naavi:', naavi);
naavi.bark();
naavi.bark2();

console.log('----------------------')
// for (let i = 0; i < 5; i += 1) {      // ⇒ ⇒ ⇒
//   // setTimeout(console.log, 100, i);
//   setTimeout(() => console.log(i), 100);
// }
// for (var i = 0; i < 5; i += 1) {      // ⇒ ⇒ ⇒
//   setTimeout(console.log, 100, i);
//   // setTimeout(() => console.log(i), 100);
// }

console.log('=======================')
const arr = ['1', '2', '3'];

// const rets = arr.map(parseInt);
const rets = arr.map((a, i, arr) => parseInt(a, i, arr));
console.log(rets);   // [ 1, NaN, NaN ]
for (let i = 0; i < arr.length; i++)
  console.log(parseInt(arr[i]));

Array.prototype.map = function (fn) {
  for (let i = 0; i < this.length; i++)
    fn(this[i], i, this);
}

const unary = fn => fn.length === 1
   ? fn
   : (arg) => fn(arg);

const rets2 = arr.map(unary(parseInt));
console.log(rets2);   // [ 1, 2, 3 ]