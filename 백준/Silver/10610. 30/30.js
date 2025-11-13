const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const N = input[0].split('').sort().reverse().map(Number);
  
  let haveZero = false;
  let sum = 0;
  for (let i = 0; i < N.length; i++) {
    sum += N[i];
    if (N[i] === 0) 
      haveZero = true;
  }

  if (!haveZero) return -1;
  if (sum % 3 !== 0) return -1;

  return N.join('');
}

console.log(solve(input));
