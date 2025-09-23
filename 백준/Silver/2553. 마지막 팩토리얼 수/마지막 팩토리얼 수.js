const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const n = Number(input[0]);

  if (n === 0 || n === 1) return 1; // 0! = 1, 1! = 1

  let res = 1;       
  let c2 = 0, c5 = 0;

  for (let i = 2; i <= n; i++) {
    let x = i;

    
    while (x % 2 === 0) { x /= 2; c2++; }
    while (x % 5 === 0) { x /= 5; c5++; }

    
    res = (res * x) % 100000;
  }

  let k = c2 - c5;
  const modPow = (a, e, m) => {
    let r = 1, base = a % m;
    while (e > 0) {
      if (e & 1) r = (r * base) % m;
      base = (base * base) % m;
      e >>= 1;
    }
    return r;
  };
  res = (res * modPow(2, k, 100000)) % 100000;

  return res % 10;
};

console.log(solve(input));
