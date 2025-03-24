const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [a1,b1] = input[0].split(' ').map(Number);
let [a2,b2] = input[1].split(' ').map(Number);

let answer = [];
let a = a1*b2 + a2*b1;
let b = b1*b2;

const getGCD = (a,b) => {
  if (b === 0) return a;

  return getGCD(b, a%b);
}

let gcd = getGCD(a,b);

while (gcd !== 1) {
  a /= gcd;
  b /= gcd;

  gcd = getGCD(a,b);
}

console.log(a,b);