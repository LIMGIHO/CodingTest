const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);
  const A = input[1].split(' ').map(Number);
  const B = input[2].split(' ').map(Number);

  let answer = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] <= B[i]) answer++;
  }

  return answer;
};

console.log(solve(input));
