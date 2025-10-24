const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const t = Number(input[0]);

  let answer = [];
  for (let i = 1; i <= t; i++) {
    const [x,y] = input[i].split(' ').map(Number);
    answer.push(x+y);
  }

  return answer.join('\n');
}

console.log(solve(input));
