class Collection {
  #arr = [];
  constructor(...args) {
    this.#arr = [...args.flat(1)];
  }

  get _arr() {
    return this.#arr;
  }

  get size() {
    return this.#arr.length;
  }

  get isEmpty() {
    return this.#arr.length === 0;
  }

  get isStack() {
    return this.constructor.name === 'Stack';
    // return this instanceof Stack;
    // return !!this.push;
  }

  get peek() {
    return this.#arr.at(this.isStack ? -1 : 0);
  }

  get poll() {
    return this.remove();
  }

  remove() {
    if (this.isStack) return this.#arr.pop();
    return this.#arr.shift();
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.#arr.length; i += 1) {
      yield this.#arr[i];
    }
  }

  toString() {
    return JSON.stringify(this.#arr);
  }

  print() {
    console.log(`${this.constructor.name}(${this.size}) ${this.toString()}`);
  }

  clear() {
    this.#arr.length = 0;
    // this.#arr = [];
  }

  toArray() {
    return [...this.#arr];
    // return this.#arr.slice();
  }
}

class Stack extends Collection {
  push(val) {
    this._arr.push(val);
    return this;
  }

  pop(val) {
    return this._arr.pop();
  }
}

class Queue extends Collection {
  enqueue(val) {
    console.log('🚀  val:', val);
    this._arr.push(val);
    return this;
  }

  dequeue(val) {
    return this._arr.shift();
  }
}

const stack1 = new Stack();
stack1.push(3).push(5).push(8);
console.log('🚀  stack1:', stack1.toString());
stack1.print();

const stack2 = new Stack(1, 2);
stack2.push(3);
console.log('🚀  stack2:', stack2.toString());

const stack3 = new Stack([1, 2, 3, 4, 5]);
console.log('🚀  stack3:', stack3.toString());

const q1 = new Queue();
// q1.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5);
// Array.from({ length: 5 }, (_, i) => i + 1).forEach(q1.enqueue.bind(q1));
Array.from({ length: 5 }, (_, i) => i + 1).forEach(a => q1.enqueue(a));
console.log('🚀  q1:', q1.toString());
// return;
// console.log('🚀  q1:', q1.dequeue());

console.log('--------------');
stack3.remove();
console.log('stack3.poll>>', stack3.poll);
stack3.print();
console.log('stack3.peek>>', stack3.peek);
q1.remove();
console.log('q1.poll>>', q1.poll);
q1.print();
console.log('q1.peek>>', q1.peek);

const arrx = q1.toArray();
arrx[1] = 'xxxxxxxxx';
q1.print();

console.log('iter>>', [...stack3], [...q1]);

class X extends Array {}
class Animal {}
class Cat extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

const c = new Cat('Navvi');
console.log('🚀  c:', c);

const x = new X();
x.push(1);
x.push(2);
console.log('🚀  x:', x);
console.log('🚀  x:', x.toString());
