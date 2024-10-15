import assert from 'assert';

const arr = [100, 200, 300, 400, 500, 600, 700];

// for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
for (const key in arr) {
  console.log('🚀  key:', key);
  console.log('🚀  val:', arr[key]);
}
// for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
for (const val of arr) console.log(val);

console.log('---------------------------');
const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false };

for (const key in obj) {
  console.log('🚀  key:', key);
  console.log('🚀  val:', obj[key]);
}

for (const val of Object.values(obj)) console.log('obj.value=', val);

Object.defineProperty(obj, 'level', { enumerable: false });
Object.defineProperty(obj, 'role', { writable: false });
obj.role = 100;
for (const [key, val] of Object.entries(obj)) console.log(key, '=', val);

console.log('---------------------------');
const data = [
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
];
function makeObjectFromArray(array) {
  const resultObject = {};
  for (const [key, ...vals] of array) {
    resultObject[key] = vals;
  }
  return resultObject;
}
const dataObj = makeObjectFromArray(data);
// console.log(dataObj);
assert.deepStrictEqual(
  dataObj,
  { A: [10, 20], B: [30, 40], C: [50, 60, 70] },
  'dataObj is Not Equals!!'
);

assert.deepStrictEqual(
  makeObjectFromArray([['A', 10, 20], ['B'], [1, 2, 3]]),
  { A: [10, 20], B: [], 1: [2, 3] },
  'dataObj is Not Equals!!'
);

function makeArrayFromObject(obj) {
  const results = [];
  for (const [key, val] of Object.entries(obj)) {
    // console.log('🚀  key:', key, val);
    results.push([key, ...val]);
  }
  return results;
}
const dataArr = makeArrayFromObject(dataObj);
// console.log('🚀  dataArr:', dataArr);
assert.deepStrictEqual(dataArr, data);

// --------------------
const kim = { nid: 3, nm: 'Kim', addr: 'Pusan' };
const newKim1 = shallowCopy(kim);
newKim1.addr = 'Daegu';
// console.log(kim.addr !== newKim1.addr); // true면 통과!
assert.notDeepStrictEqual(kim, newKim1);
assert.deepStrictEqual(newKim1, { ...newKim1 });

function shallowCopy(obj) {
  const resultObj = {};
  for (const [k, v] of Object.entries(obj)) resultObj[k] = v;

  return resultObj;
}
// ---- deep
const kim2 = {
  nid: 3,
  nm: 'Kim',
  addr: { city: 'Pusan', road: 'Haeundaero', zip: null },
};
const newKim2 = deepCopy(kim2);
assert.deepStrictEqual(newKim2, kim2);

newKim2.addr.city = 'Daegu';
assert.notStrictEqual(newKim2.addr.city, kim2.addr.city);
// assert.notDeepStrictEqual(newKim2, kim2);

function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  const resultObj = {};
  for (const [k, v] of Object.entries(obj)) resultObj[k] = deepCopy(v);

  return resultObj;
}
