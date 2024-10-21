import assert from 'assert';

const randTime = value =>
  new Promise(resolve => {
    const rand_T = Math.random() * 1000;
    setTimeout(() => {
      resolve(value);
    }, rand_T);
  });
const vals = [1, 2, 3];

//두 번째 테스트 코드 통과 한 코드
//성호님
const promiseAllAsync_성호 = async promises => {
  const promiseArr = [];
  for (const promise of promises) {
    promise.catch(err => err);
  }
  //rejected로 간주한 promise에 대한 처리가 없으면 에러가 발생
  for (const idx in promises) {
    const res = await promises[idx];
    promiseArr[idx] = res;
  }
  return promiseArr;
};

// promiseAllAsync_성호([randTime(1), randTime(2), randTime(3)])
//     .then(arr => {
//         console.table(arr);
//         assert.deepStrictEqual(arr, vals);
//     })
//     .catch(console.error);

// promiseAllAsync_성호([randTime(11), Promise.reject('RRR'), randTime(33)])
//     .then(array => {
//         console.log('여긴 과연 호출될까?!');
//     })
//     .catch(error => {
//         console.log('reject!!!!!!>>', error);
//     });

//----------------------------------------------------

//기환님
const promiseAllAsync_기환 = async promises => {
  const results = [];
  if (promises.length === 0) {
    return results;
  }

  let cntToRun = promises.length;

  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, index) => {
      try {
        const result = await promise;
        console.log('🚀  result:', result);
        results[index] = result;
        cntToRun--;
        if (cntToRun === 0) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};

// promiseAllAsync_기환([randTime(1), randTime(2), randTime(3)])
//     .then(arr => {
//         console.table(arr);
//         assert.deepStrictEqual(arr, vals);
//     })
//     .catch(console.error);

// promiseAllAsync_기환([randTime(11), Promise.reject('RRR'), randTime(33)])
//   .then(array => {
//     console.log('여긴 과연 호출될까?!');
//   })
//   .catch(error => {
//     console.log('reject!!!!!!>>', error);
//   });

//----------------------------------------------------

//두 번째 테스트 코드 통과 못한 코드
//async/await은 try catch문, 나는 왜 안 될까?
//아영
const promiseAllAsync_아영 = async promises => {
  const promiseArr = [];
  // promises.forEach(p => p.catch(err => err));
  for (const promise of promises) {
    try {
      const res = await promise;
      promiseArr.push(res);
    } catch (err) {
      return { state: 'rejected', reason: err };
    }
  }
  return promiseArr;
};

// promiseAllAsync_아영([randTime(1), randTime(2), randTime(3)])
//   .then(arr => {
//     console.table(arr);
//     assert.deepStrictEqual(arr, vals);
//   })
//   .catch(console.error);

// promiseAllAsync_아영([randTime(11), Promise.reject('RRR'), randTime(33)])
// promiseAllAsync_아영([Promise.reject('RRR'), randTime(33)])
//   .then(array => {
//     console.log('여긴 과연 호출될까?!!', array);
//   })
//   .catch(error => {
//     console.log('reject!!!!!!>>', error);
//   });

//----------------------------------------------------

//지연
async function promiseAllAsync_지연(arr) {
  const ret = []; //프로미스 결과배열
  let cnt = 0;

  if (arr.length === 0) {
    return Promise.resolve([]);
  }

  //ver1
  for (let i = 0; i < arr.length; i++) {
    let p;
    try {
      p = await Promise.resolve(arr[i]); //프로미스결과 기다리기
      console.log('🚀  p:', p);
      ret[i] = p; //결과배열에 프로미스결과 넣기
      cnt++;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  if (cnt === arr.length) return Promise.resolve(ret); //마지막에 한번만 resolve
}

// 지연님 테스트코드
(async () => {
  try {
    const arr = await promiseAllAsync_지연([
      Promise.reject('RRR'),
      randTime(1),
      // randTime(2),
      randTime(3),
    ]);
    console.table(arr);
    //assert.deepStrictEqual(arr, vals);
  } catch (err) {
    console.error('reject>>', err);
  }
})(); //익명 async로 묶으면 최상위 await사용가능함
