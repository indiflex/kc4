import { getScore } from './hi';

let i = 100;
const j = 100;

let firstName = 'Tom';

// console.bulb('No Pain, No Gain!!');
// firstName = true;
firstName.length;

let lastName: undefined | null | string | boolean;
// if (typeof lastName === 'string')
if (lastName === 'string') console.log('🚀  lastName:', lastName?.length);

lastName = 'King';
console.log('🚀  lastName:', lastName);
lastName;

lastName = true;
console.log('🚀  lastName:', lastName);

let coach: string | undefined;
console.log(coach?.length); // ok! why??

let rocker = 'Alice';

type J = {
  firstName: string;
  lastName: string;
  age: number;
  tel?: number;
};

let john: J = {
  firstName: 'John',
  lastName: 'ahn',
  age: 33,
};

console.log(john.age, john.tel);

const S = 'SS';
let T: 'TT';
T = 'TT';

console.log(getScore('국'));
// getScore('과');

type Member = {
  name: string;
  addr: string;
  discountRate: number;
};

type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;

let customer: Customer;

customer = {
  name: '홍길동',
  addr: '용산구',
  discountRate: 0.1,
  // age: 11,
};

const price = 10000 - 10000 * customer.discountRate;

let ccc = {
  name: '홍길동',
  addr: '용산구',
};
if ('x' in ccc) console.log('🚀  ccc:', ccc.x);
// if (ccc.hasOwnProperty('x')) console.log('🚀  ccc:', ccc.x);

// customer = ccc; //error

// customer = { name: '홍길동', age: 33, xxx: 12 }; // xxx not exists
customer = { name: '홍길동', age: 33 };
let ddd = { name: '홍길동', age: 33, xxx: 12 };
customer = ddd;
console.log('🚀  customer:', customer);

// let m: Member = { name: 'Hong', addr: 'Seoul' };
// console.log('🚀  m:', m.discountRate);

const songs = ['One More Time', 'I AM', 'Cry'];

// song : string
// index : number

songs.forEach((song, index) => {
  console.log(`${song} is at index ${index}`);
});

function forEach(arr: string[], cb: (a: string | number, i: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

forEach(songs, (a: string | number | boolean) => {
  console.log(`${a}`);
});

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(oneToTen[400]?.toFixed(2));

// const nums: number[] = [];

interface ID {
  id: number;
}

interface User extends ID {
  name: string;
  getName: () => string;
}

class Vip implements User {
  id;
  name;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Vvip extends Vip {
  // asdfsaf
}

const xuser: User = new Vip(1, 'Park');

const kim: User = {
  id: 1,
  name: 'Hong',
  getName() {
    return this.name;
  },
};

const hong: Emp = { id: 1, ename: 'Hong' };
type Emp = {
  ename: string;
} & ID;

class Boss implements Emp {
  id;
  ename;
  constructor(id: number, name: string) {
    this.id = id;
    this.ename = name;
  }
  getName() {
    return this.ename;
  }
}

export {};
