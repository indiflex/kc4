// class Promise {
//   thenFns = [f1];
//   catchFns = [f2];
//   constructor(f) {
//     f(this.resolve, this.reject);
//   }

//   then(f1, f2) {
//     this.thenFns.push(f1);
//     this.catchFns.push(f2);
//   }

//   resolve(x) {
//     const f = thenFns.pop();
//     f(x);
//   }

//   reject(e) {
//     const f = catchFns.pop();
//     f(e);
//   }
// }

function p1() {
  const promiseFn = (id = 1) =>
    new Promise((resolve, reject) => {
      console.log('id>>', id);
      if (id < 7) resolve(id + 1);
      else reject(new Error('어디로?' + id));
    });

  promiseFn() // 1
    .then(res => {
      console.log('res1>>', res); // 2
      promiseFn(res); // 2
    })
    .then(res => {
      console.log('res2>>', res); // undefined
      return promiseFn(res ?? 3); // 3
    })
    .then(promiseFn) // 4
    .then(res => {
      console.log('res3>>', res); // 5
      return promiseFn(res); // 5
    })
    .then(() => promiseFn(4))
    .then(res => promiseFn(res)) // 6
    .catch(err => console.log('Error!!>>', err));
}

import { rand } from './utils/index.js';
// const randtime = new Promise(resolve => {
//   const sec = rand(1, 4) * 500;
//   setTimeout(() => resolve(sec), sec);
// });

function p2() {
  const randTime = () =>
    new Promise(resolve => {
      const sec = rand(1, 4) * 500;
      setTimeout(() => {
        console.log('sec=', sec);
        resolve(sec);
      }, sec);
    });

  const isParellel = true;
  console.time('promi');
  if (isParellel) {
    // const pa = Promise.all([randTime(), randTime(), randTime()]);
    // const pa = Promise.all([
    const pa = Promise.allSettled([
      randTime(),
      Promise.reject('ERR'),
      randTime(),
      randTime(),
    ]);

    pa.then(arr => {
      console.timeEnd('promi');
      console.log(arr);
    }).catch(console.error);
  } else {
    randTime()
      .then(x => {
        return randTime();
      })
      .then(x => {
        return randTime();
      })
      .then(x => {
        return randTime();
      })
      .then(() => console.timeEnd('promi'));
  }
}

function p3() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(last => console.log('last=', last));
}

// p3();

async function p4() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user1 = await res.json();
  console.log('🚀  user1:', user1);
}

// p4();

// const user1 = await fetch('https://jsonplaceholder.typicode.com/users/1').then(
//   res => res.json()
// );
// console.log('🚀  user1:', user1.username);

const afterTime = sec =>
  new Promise(resolve => {
    setTimeout(resolve, sec * 1000, sec);
  });

function p5() {
  const mapResult = [1, 2, 3].map(async val => {
    const r = await afterTime(val);
    console.log('r=', r);
    return r;
  });
  console.log('mapResult=', mapResult);
}

p5();
