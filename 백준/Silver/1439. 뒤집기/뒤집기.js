const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');


const solve = (input) => {
  const str = input[0];
  const count = [0,0];
  let cur = '';

  for (const s of str.split('')) {
    if (cur != s) {
      cur = s;
      count[+s]++
    }
  }

  return Math.min(...count);
};

console.log(solve(input));
