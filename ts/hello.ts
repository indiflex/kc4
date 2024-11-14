export function time1() {
  return [1, 2, 3];
}

export function time(cb: () => void) {
  setTimeout(() => {
    // console.log('time!!');
    cb();
  }, 500);
}

export const timePromi = (n: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('timePromi!!');
      if (n % 2 === 0) resolve(n + 1);
      reject(`OddNumber:${n}`);
    }, 500);
  });

export function time2(flag: number) {
  if (flag % 2 === 0) throw new Error('Time Error!');
  return flag + 1;
}

export function time3(flag: number) {
  const addr = flag > 1 ? undefined : { city: 'Seoul' };
  return { id: 1, name: 'Hong', addr };
}

// let i: number = 1;
// console.log('🚀  i:', i);

// const timer = setTimeout(console.log, 1000, 'xxx');
