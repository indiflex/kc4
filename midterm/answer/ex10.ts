class Collection<T> {
  protected arr = Array<T>(); // T[]

  constructor(...args: T[]) {
    this.arr.push(...args);
  }

  push(...args: T[]) {
    this.arr.push(...args);
    return this.arr;
  }

  get length() {
    return this.arr.length;
  }

  isEmpty() {
    return !this.arr.length;
  }

  clear() {
    this.arr.length = 0;
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  // [1, 2, 3]
  *[Symbol.iterator]() {
    for (let i = this.length - 1; i >= 0; i -= 1) {
      yield this.toArray()[i];
    }
  }

  toArray() {
    return this.isQueue() ? this.arr.toReversed() : this.arr;
  }

  print() {
    console.log(`<${this.constructor.name}: [${this.toArray()}]>`);
  }

  private isQueue() {
    return this instanceof Queue;
  }
}

class Stack<T> extends Collection<T> {}
class Queue<T> extends Collection<T> {}

// ArrayList 클래스를 작성하세요.

type Node<T> = {
  value?: T;
  rest?: Node<T> | undefined;
};
class ArrayList<T> extends Collection<T> {
  constructor(args: T[] = []) {
    super(...args);
  }

  add(value: T, index?: number) {
    index = index ?? this.length;
    this.arr.splice(index, 0, value);
    return this;
  }

  get(index: number) {
    return this.arr[index];
  }

  remove(value: T) {
    const index = this.indexOf(value);
    this.arr.splice(index, 1);
  }

  removeByIndex(index: number) {
    this.arr.splice(index, 1);
  }

  set(index: number, value: T) {
    this.arr[index] = value;
  }

  contains(value: T) {
    return this.arr.includes(value);
  }

  indexOf(value: T) {
    return this.arr.indexOf(value);
  }

  size() {
    return this.length;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.arr.length; i++) {
      yield this.arr[i];
    }
  }

  toArray() {
    return this.arr;
  }

  arrayToList(arr: T[]): Node<T> | undefined {
    let node: Node<T> = {};
    for (let i = this.length - 1; i >= 0; i -= 1) {
      node =
        i === this.length - 1
          ? { value: arr[i] }
          : { value: arr[i], rest: node };
    }
    return node;
  }

  listToArray(list: Node<T> | undefined) {
    const arr: T[] = [];
    let node = list;
    while (!!node) {
      if (!!node.value) arr.push(node.value);
      node = node.rest;
    }
    return arr;
  }

  print() {
    console.log(JSON.stringify(this.arrayToList(this.arr) ?? {}, null));
  }

  toString() {
    return `${this.constructor.name}(${this.length}) ${JSON.stringify(
      this.arrayToList(this.arr) ?? {},
      null
    )}`;
  }
}

export { Stack, Queue, ArrayList };
