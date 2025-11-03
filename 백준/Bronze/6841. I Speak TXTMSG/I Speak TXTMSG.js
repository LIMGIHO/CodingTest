const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const map = new Map();
  map.set('CU', 'see you');
  map.set(':-)', 'I’m happy');
  map.set(':-(', 'I’m unhappy');
  map.set(';-)', 'wink');
  map.set(':-P', 'stick out my tongue');
  map.set('(~.~)', 'sleepy');
  map.set('TA', 'totally awesome');
  map.set('CCC', 'Canadian Computing Competition');
  map.set('CUZ', 'because');
  map.set('TY', 'thank-you');
  map.set('YW', 'you’re welcome');
  map.set('TTYL', 'talk to you later');

  let answer = [];
  for (let i = 0; i < input.length; i++) {
    const short = input[i];
    const message = map.get(short) ? map.get(short) : short;
    answer.push(message);
  }

  return answer.join('\n');
}

console.log(solve(input));
