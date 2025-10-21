const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);
  const ropes = input.slice(1).map(Number).sort((a,b) => a-b);
  // const dp = Array.from({length:N}, () => 0);

  let answer = 0;
  for (let i = 0; i < N; i++) {
    answer = Math.max(answer, (N-i) * ropes[i]);
  }

  return answer;
};

console.log(solve(input));
