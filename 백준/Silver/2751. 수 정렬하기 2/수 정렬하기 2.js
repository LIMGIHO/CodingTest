const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const n = Number(input[0]);
  const arr = input.slice(1).map(Number).sort((a,b) => a-b);

  return arr.join('\n');
};

console.log(solve(input));
