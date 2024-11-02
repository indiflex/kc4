function loopFibonacci(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  return arr[n];
}

function recurFibonacci(n) {
  if (n <= 1) return n;
  return recurFibonacci(n - 2) + recurFibonacci(n - 1);
}

const memoFibonacci = memoized(function (n) {
  if (n <= 1) return n;
  return memoFibonacci(n - 2) + memoFibonacci(n - 1);
});

function memoized(fn) {
  const cache = {};
  return function (n) {
    return cache[n] ?? (cache[n] = fn(n));
  };
}

module.exports = { loopFibonacci, recurFibonacci, memoFibonacci };
