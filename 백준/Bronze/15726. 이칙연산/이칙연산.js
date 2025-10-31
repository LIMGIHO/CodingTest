const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const [a,b,c] = input[0].split(' ').map(Number);
  return Math.floor(Math.max(a*b/c, a/b*c));
}

console.log(solve(input));
