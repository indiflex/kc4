const randTime = val => {
  const delay = Math.random() * 1000;
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('randTime>>', val, delay);
      resolve(`${val} ${delay}`);
    }, delay)
  );
};

const promiseAllAsync = async promises => {
  const promiseArr = [];
  for (const promise of promises) {
    promise.catch(err => {
      console.log('ERR11>>', err);
      return '9999';
    });
  }

  for (const promise of promises) {
    try {
      const res = await promise;
      console.log('🚀  res:', res);
      promiseArr.push(res);
    } catch (err) {
      console.log('ERR12>>', err);
      // return new Error(err);
      throw new Error(err);
      // return Promise.reject('QQQ');
      // throw new Error('xxx');
      // return 1;
    }
  }
  return promiseArr;
};

promiseAllAsync([randTime(11), Promise.reject('RRR'), randTime(33)])
  .then(array => {
    console.log('THEN>>', array);
    console.log('여긴 과연 호출될까?!');
  })
  .catch(error => {
    console.log('reject!!!!!!>>', error);
  });
