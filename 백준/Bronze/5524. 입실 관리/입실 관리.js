const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);

  const answer = [];
  for (let i = 1; i <= N; i++) {
    answer.push(input[i].toLowerCase());
  }
  
  return answer.join('\n');
}

console.log(solve(input));
