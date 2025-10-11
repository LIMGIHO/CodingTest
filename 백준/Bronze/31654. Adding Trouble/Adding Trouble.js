const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const [a,b,c] = input[0].split(' ').map(Number);

  if (a+b === c) return 'correct!';
  else return 'wrong!';
}

console.log(solve(input));
