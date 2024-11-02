// range 함수를 작성하세요.
const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];

  if ((start - end) * step > 0) return [];

  let tmp = start;
  end = end ?? (start > 0 ? ((start = 1), tmp) : start < 0 ? -1 : 0);

  const results = [];
  for (
    let i = start;
    start > end ? i >= end : i <= end;
    i = addPoints(i, step)
  ) {
    results.push(i);
  }

  return results;
};

const pointLength = f =>
  f.toString().length - Math.trunc(f).toString().length - 1;

function addPoints(a, b) {
  const alen = pointLength(a);
  const blen = pointLength(b);
  const maxLen = Math.max(alen, blen);
  const ret = +(a + b).toFixed(maxLen < 0 ? 0 : maxLen);
  // console.log('🚀  ret:', a, b, '==>', ret);
  return ret;
}

addPoints(1, 2);
addPoints(1.5, 0.5);
addPoints(1.5, -2);
addPoints(1.2, 2.34);

module.exports = { range };
