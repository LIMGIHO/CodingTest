const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    if (input[i] % 2 !== 0) answer++;
  }

  return answer;
}

console.log(solve(input));
