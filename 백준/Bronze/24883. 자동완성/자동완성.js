const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const N = input[0];

  return N === 'N' || N === 'n' ? 'Naver D2' : 'Naver Whale';
}

console.log(solve(input));
