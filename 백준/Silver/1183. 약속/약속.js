const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

const solve = (input) => {
  const n = Number(input[0]);

  if (n % 2 === 1) return 1;

  let diff = [];
  for (const str of input.slice(1)) {
    const [a,b] = str.split(' ').map(Number);
    diff.push(a-b);
  }

  diff.sort((a,b) => a-b);
  
  return diff[n/2] - diff[n/2-1] + 1;
};

console.log(solve(input));
