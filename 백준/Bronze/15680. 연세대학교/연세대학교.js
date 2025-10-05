const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const N = Number(input[0]);

  if (N === 0) return ('YONSEI');
  else return ('Leading the Way to the Future')
}

console.log(solve(input));
