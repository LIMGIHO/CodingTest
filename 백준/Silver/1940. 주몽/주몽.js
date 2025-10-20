const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);
  const M = Number(input[1]);
  const numbers = input[2].split(' ').map(Number);

  let answer = 0;
  for (let i = 0; i < N-1; i++) {
    for (let j = i+1; j < N; j++) {
      if (numbers[i] + numbers[j] === M) answer++;
    }
  }

  return answer;
};

console.log(solve(input));
