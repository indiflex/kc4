const obj = {
  id: 1,
  name: 'Hong',
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        value: this.name[i++],
        done: i > this.name.length,
      }),
    };
  },
};
const arr = [1, 2, 3];
console.log('🚀  arr:', ...arr);
if (typeof obj[Symbol.iterator] === 'function')
  console.log('🚀  obj:', ...obj, obj.length);

for (const x of arr) console.log('x=', x);
for (const x in obj) console.log('x=', x);
console.log('-----------------------');
function* route() {
  const start = yield '출발 역은?';
  console.log('🚀  start:', start);
  const end = yield '도착 역은?';
  return `${start}역에서 출발하여 ${end}역에 도착합니다.`;
}

const caller = route();
console.log('🚀  caller:', caller);
const n1 = caller.next();
console.log('🚀  n1:', n1);
const n2 = caller.next('문래');
console.log('🚀  n2:', n2);

const n3 = caller.next('신림');
console.log('🚀  n3:', n3);

console.log('=======================');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', answer => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.on('close', function () {
//   process.exit();
// });

rl.on('line', answer => {
  console.log('line.answer>>', answer);
  if (answer === 'bye') rl.close();
}).on('close', () => {
  process.exit();
});
