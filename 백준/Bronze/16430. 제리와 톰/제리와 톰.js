const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const [a,b] = input[0].split(' ').map(Number);

  return `${b-a} ${b}`;
}

console.log(solve(input));
