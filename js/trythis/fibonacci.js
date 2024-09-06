function loopFibo(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  return arr[n];
}

const lf5 = loopFibo(5);
console.log('🚀  lf5:', lf5);

function recurFibo(n) {
  if (n <= 1) return n;
  return recurFibo(n - 2) + recurFibo(n - 1);
}
const rf = recurFibo(5);
console.log('🚀  rf:', rf);

console.log('---------------');
const memoizedFibo = memoized(function A(n) {
  if (n <= 1) return n;
  return memoizedFibo(n - 2) + memoizedFibo(n - 1);
});

const mf = memoizedFibo(5);
const mf2 = memoizedFibo(6);
const mf3 = memoizedFibo(7);
console.log('🚀  mf:', mf, mf2, mf3);

function memoized(fn) {
  const cache = {};
  return function (k) {
    // console.log('🚀  cache:', cache);
    return cache[k] ?? (cache[k] = fn(k));
  };
}

console.log('-----------------------');
// const mfx = memoizedFibo(9189);
const mfx = memoizedFibo(10000);
console.log('🚀  mfx:', mfx);
