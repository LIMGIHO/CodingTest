const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const sleep = Number(input[0]);
  const wake = Number(input[1]);

  if (sleep >= 20) return 24 - sleep + wake;
  else return wake - sleep  
}

console.log(solve(input));
