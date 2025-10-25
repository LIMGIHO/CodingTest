const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  let [h,m] = input[0].split(' ').map(Number);

  return (h - 9) * 60 + m;
}

console.log(solve(input));