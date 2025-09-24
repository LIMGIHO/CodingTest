const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  let [a,b] = input[0].split(' ').map(BigInt);
  let L = 0n, R = 0n;

  while (a > 1n || b > 1n) {
    if (a > b) {
      const q = (a - 1n) / b;
      L += q;
      a -= q * b;
    } else {
      const q = (b - 1n) / a;
      R += q;
      b -= q * a;
    }
  }

  return [L.toString(),R.toString()].join(' ');
};

console.log(solve(input));
