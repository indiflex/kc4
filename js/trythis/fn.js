import assert from 'assert';

function ex1() {
  const dog = {
    name: 'Maxx',
    showMyName() {
      console.log(`My name is ${this.name}.`);
    },
    whatsYourName() {
      setTimeout(() => this.showMyName(), 500);

      // setTimeout(this.showMyName.bind(this), 500);
    },
  };

  dog.whatsYourName();
}
// ex1();

function once(cb) {
  let done = false;
  return function (...args) {
    if (done) return;
    done = true;
    return cb(...args);
  };
}

const onceAgain = (cb, rebirth = 1000) => {
  let done = false;
  return (...args) => {
    if (done) {
      setTimeout(() => {
        done = false;
      }, rebirth);
      return;
    }
    done = true;
    return cb(...args);
  };
};

(function ex2_1() {
  const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);

  assert.strictEqual(fn(1, 6), '금일 운행금지 차량은 끝번호 1, 6입니다!');
  assert.strictEqual(fn(2, 7), undefined);
  assert.strictEqual(fn(3, 8), undefined);
})();

(function ex2_2() {
  const rebirthSec = 2000;
  const fn = onceAgain(
    (x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`,
    rebirthSec
  );

  assert.strictEqual(fn(1, 6), '금일 운행금지 차량은 끝번호 1, 6입니다!');
  assert.strictEqual(fn(2, 7), undefined);
  assert.strictEqual(fn(3, 8), undefined);
  setTimeout(() => {
    assert.strictEqual(fn(4, 9), undefined);
    // console.debug('done!!');
    // console.table({ id: 1, name: 'Hong' });
  }, rebirthSec - 500);
  setTimeout(() => {
    assert.strictEqual(fn(4, 9), '금일 운행금지 차량은 끝번호 4, 9입니다!');
    // console.debug('done!!');
    // console.table({ id: 1, name: 'Hong' });
  }, rebirthSec);
})();

function ex3() {
  const before = () => console.log('before....');
  const after = () => console.log('after...');

  const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
  const someFn2 = (id, nickname, email, level) =>
    console.log(`${id}/${nickname}/${email}/${level}`);

  const template = cb => {
    return (...args) => {
      before();
      cb(...args);
      after();
    };
  };

  const temp = template(someFn); // before → someFn → after 실행
  const temp2 = template(someFn2); // before → someFn2 → after 실행

  temp('sico', 'hello');
  console.log('------------------');
  temp2(1, 'sico', 'sico@gmail.com', 5);
}

console.log('==========================');

function ex4() {
  const WEEKS = '일월화수목금토';
  const getNextWeek = (() => {
    let widx = -1;
    return () => {
      widx += 1; // side-effect!
      if (widx >= WEEKS.length) widx = 0;
      return `${WEEKS[widx]}요일`;
    };
  })();

  let cnt = 0;
  const intl = setInterval(() => {
    // widx += 2; // side-effect!
    console.log('call', cnt, getNextWeek());
    if ((cnt += 1) === 18) clearInterval(intl);
  }, 500);
}

function ex6() {
  function getDiffMillis(dt1, dt2) {
    const d1 = new Date(dt1);
    const d2 = new Date(dt2);
    const { getTime: getTime1 } = d1;
    const { getTime: getTime2 } = d2;
    return getTime1.call(d1) - getTime2.call(d2);
  }
  assert.strictEqual(getDiffMillis('2025-01-01', '2025-01-02'), -86400000);
}
ex6();
