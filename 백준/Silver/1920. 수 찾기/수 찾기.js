const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);
  const arrN = input[1].split(' ').map(Number);
  const M = Number(input[2]);
  const arrM = input[3].split(' ').map(Number);

  const answer = [];
  const set = new Set(arrN);
  for (const m of arrM) {
    if (set.has(m)) answer.push(1);
    else answer.push(0);
  }

  return answer.join('\n');
};

console.log(solve(input));
