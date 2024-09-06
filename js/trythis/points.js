// 'use strict';
// NaN = 1;
function ex1(x) {
  for (let i = 0.1; i < 1; i = i + 0.1) {
    console.log(+i.toFixed(1));
  }
}
// delete ex1;

function ex2() {
  for (let i = 1; i <= 10; i += 1) {
    const sqrt = Math.sqrt(i);
    if (sqrt % 1 !== 0) console.log(i, +(sqrt % 1).toFixed(3));
  }
}

const WEEK_NAMES = '일월화수목금토';
function ex3() {
  const wday = new Date().getDay();
  console.log(WEEK_NAMES[wday]);
  let wname;
  switch (wday) {
    case 0:
      wname = '일';
      break;
    case 1:
      wname = '월';
      break;
    case 2:
      wname = '화';
      break;
    case 3:
      wname = '수';
      break;
    case 4:
      wname = '목';
      break;
    case 5:
      wname = '금';
      break;
    case 6:
      wname = '토';
      break;
    default:
      wname = 'Not Valid Day!';
      break;
  }

  console.log(`오늘은 ${wname}요일 입니다.`);
}
ex3();

for (let i = 0; i < WEEK_NAMES.length; i += 1) {
  console.log(i, WEEK_NAMES[i]);
}
console.log('------------');
for (const w of WEEK_NAMES) {
  console.log(w);
  if (w === '수') break;
}

function addPoints(a, b) {
  const alen = a.toString().length - Math.trunc(a).toString().length - 1;
  const blen = b.toString().length - Math.trunc(b).toString().length - 1;

  // console.log('🚀  alen blen:', alen, blen);

  // const result = +(a + b).toFixed(Math.max(alen, blen);
  const result = +(a + b).toFixed(alen > blen ? alen : blen);
  console.log('🚀  result:', result);
}

addPoints(0.21354, 0.1); // 0.31354
addPoints(0.14, 0.28); // 0.42
addPoints(0.34, 0.226); // 0.566
addPoints(10.34, 200.226); // 210.566
addPoints(0.143, -10.28); // -10.137
addPoints(0.143, -10); // -9.857

// ---------------------------
function addPoints(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) return NaN;

  aIsPlus = a >= 0;
  bIsPlus = b >= 0;

  const aStr = String(a);
  const bStr = String(b);

  aArr = aStr.split('.');
  bArr = bStr.split('.');
  aArr[0] = aArr[0].replace('-', '');
  bArr[0] = bArr[0].replace('-', '');

  if (aArr.length == 1) {
    aArr.push('0');
  }
  if (bArr.length == 1) {
    bArr.push('0');
  }

  afterDotMax = Math.max(aArr[1].length, bArr[1].length);
  while (aArr[1].length != afterDotMax || bArr[1].length != afterDotMax) {
    if (aArr[1].length < afterDotMax) {
      aArr[1] += '0';
    }
    if (bArr[1].length < afterDotMax) {
      bArr[1] += '0';
    }
  }

  if (aIsPlus ^ bIsPlus) {
    if (Math.abs(Number(a)) >= Math.abs(Number(b))) {
      beforeDotCal = Number(aArr[0]) - Number(bArr[0]);
      afterDotCal = Number(aArr[1]) - Number(bArr[1]);

      return Number(`${aIsPlus ? '' : '-'}${beforeDotCal}.${afterDotCal}`);
    } else {
      beforeDotCal = Number(bArr[0]) - Number(aArr[0]) - 1;
      afterDotCal = Number('1' + bArr[1]) - Number(aArr[1]);

      size = 10 ** afterDotMax;
      beforeDotCal = beforeDotCal + Math.floor(afterDotCal / size);

      return Number(`${bIsPlus ? '' : '-'}${beforeDotCal}.${afterDotCal}`);
    }
  } else {
    beforeDotCal = Number(aArr[0]) + Number(bArr[0]);
    afterDotCal = Number(aArr[1]) + Number(bArr[1]);
    return Number(`${beforeDotCal}.${afterDotCal}`);
  }
}

// ---------------------------------
function chkNegative(value) {
  return value < 0 ? true : false;
}
function setNegative(value) {
  return value < 0 ? -value : value;
}
function addZeros(value, length, isBack) {
  return isBack ? value + '0'.repeat(length) : '0'.repeat(length) + value;
}
function binaryToFloat(value, limit) {
  return parseFloat(
    value
      .split('')
      .reduce((acc, cur, idx) => acc + cur * Math.pow(2, -idx - 1), 0)
      .toFixed(limit)
  );
}
function negateAndAddBinary(value) {
  return addBinary(negateBinary(value));
}
function negateBinary(value) {
  return value.map(x =>
    x
      .split('')
      .map(bit => (bit === '0' ? '1' : '0'))
      .join('')
  );
}

function addBinary(value) {
  let [integerPart, decimalPart] = value;
  let count = 1;

  let decimal = decimalPart
    .split('')
    .reverse()
    .map(bit => {
      if (count === 0) return bit;
      if (bit === '0') {
        count = 0;
        return '1';
      }
      return '0';
    })
    .reverse()
    .join('');

  let integer = integerPart
    .split('')
    .reverse()
    .map(bit => {
      if (count === 0) return bit;
      if (bit === '0') {
        count = 0;
        return '1';
      }
      return '0';
    })
    .reverse()
    .join('');

  return [integer, decimal];
}
function addPoints(a, b) {
  function calBinary(value1, value2) {
    return (result => {
      for (let i = value1.length - 1; i >= 0; i--) {
        let sum = +value1[i] + +value2[i] + carry;
        carry = sum >> 1;
        result = (sum % 2) + result;
      }
      return result;
    })('');
  }

  const isANegative = chkNegative(a);
  const isBNegative = chkNegative(b);

  let carry = 0;
  let integer = '';
  let decimal = '';
  let max = Math.max(
    (a.toString().split('.')[1] || '').length,
    (b.toString().split('.')[1] || '').length
  ); // 실수부의 길이
  let chk =
    '0.'.concat(parseFloat(a.toString().split('.')[1])) >
    '0.'.concat(parseFloat(b.toString().split('.')[1]))
      ? true
      : false; // a의 실수부가 b의 실수부보다 큰지
  let isNegative = a + b < 0; // 합이 음수인지

  // 음수면 양수로 변환
  a = setNegative(a);
  b = setNegative(b);

  // 2진수로 변환
  a = a.toString(2).split('.');
  b = b.toString(2).split('.');

  // 소수부가 없으면 빈 문자열로 초기화
  a[1] = a[1] || '';
  b[1] = b[1] || '';

  // 정수부, 소수부의 길이를 맞추기 위해 0을 추가
  a[0].length < b[0].length
    ? (a[0] = addZeros(a[0], b[0].length - a[0].length, false))
    : (b[0] = addZeros(b[0], a[0].length - b[0].length, false));
  a[1].length < b[1].length
    ? (a[1] = addZeros(a[1], b[1].length - a[1].length, true))
    : (b[1] = addZeros(b[1], a[1].length - b[1].length, true));

  // 음수면 2의 보수로 변환
  if ((!isANegative && isBNegative) || (isANegative && !isBNegative)) {
    if (isANegative) a = negateAndAddBinary(a);
    if (isBNegative) b = negateAndAddBinary(b);
  }

  // 소수부, 정수부의 합을 계산
  decimal = calBinary(a[1], b[1]);
  integer = calBinary(a[0], b[0]);

  // 음수면 2의 보수 연산 수행
  if ((!isANegative && isBNegative) || (isANegative && !isBNegative)) {
    if (isNegative) {
      [integer, decimal] = [
        integer
          .split('')
          .map(x => (x === '0' ? '1' : '0'))
          .join(''),
        decimal
          .split('')
          .map(x => (x === '0' ? '1' : '0'))
          .join(''),
      ];
    }

    // A가 음수일 때, a의 실수부가 b의 실수부보다 크지 않다면 1을 더해줌
    if (!chk && isANegative) {
      integer = (parseInt(integer, 2) + 1).toString(2);
    }
  }

  console.log(
    (isNegative ? -1 : 1) * (parseInt(integer, 2) + binaryToFloat(decimal, max))
  );
}

function addPoints(a, b) {
  // 소수점 자리수 구하기
  function findPoint(num) {
    // const newArr = Array.from(String(num));
    const newArr = String(num);

    let index = newArr.indexOf('.');
    // indexOf는 값이 없으면 -1 반환
    if (index === -1) return 0;

    return newArr.length - index - 1;
  }

  let pointA = findPoint(a);
  let pointB = findPoint(b);

  // 매개변수 a, b 더하기
  let sum = a + b;

  ret = +sum.toFixed(pointA > pointB ? pointA : pointB);
  console.log('🚀  ret:', ret);
}
