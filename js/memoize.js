var g;
console.log(x);
if (g) {
  var x;
}

function memoized(fn) {
  const memoizedTable = {};
  return function B(k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedFactorial = memoized(function A(n) {
  console.log('fname=', A.name);
  if (n === 1) return 1;
  return n * memoizedFactorial(n - 1);
});
// A(1);

function f(x) {
  console.log('***>>', x?.id);
}
f((obj = { id: 100 }));
f({ id: 100 });
console.log('🚀  obj:', obj);

console.log(memoizedFactorial(3)); // B(3) ⇒ 6
console.log(memoizedFactorial(5));
// console.log(`runCnt=${memoizedFactorialRunCnt}`);

const f1 = memoized(function a1() {});
