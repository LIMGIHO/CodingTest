const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const [A,B] = input[0].split(' ').map(Number);

  if (A-1 <= B) return A + A - 1;
  else return B + B + 1
};

console.log(solve(input));
