export {};
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

function getScore(subject: '국' | '영' | '수') {
  console.log(subject);
}
getScore('국');
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

customer = { name: '홍길동', age: 33, xxx: 12 };
let ddd = { name: '홍길동', age: 33, xxx: 12 };
customer = ddd;
console.log('🚀  customer:', customer);

// let m: Member = { name: 'Hong', addr: 'Seoul' };
// console.log('🚀  m:', m.discountRate);
