import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input });

function* add() {
  const x = yield '첫 번째 수?';
  const y = yield '두 번째 수?';
  return x + y;
}

const itAdd = add();
console.log(itAdd.next().value);

rl.on('line', answer => {
  const num = Number(answer);
  if (isNaN(num)) {
    console.error('숫자를 입력하세요!');
    return;
  }

  const { value, done } = itAdd.next(num);

  if (done) {
    console.log('Total:', value);
    rl.close();
  } else {
    console.log(value);
  }
}).on('close', () => {
  process.exit();
});
