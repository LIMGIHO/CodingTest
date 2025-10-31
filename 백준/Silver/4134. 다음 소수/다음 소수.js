const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const t = Number(input[0]);
  const map = new Map();

  const checkPrime = (n) => {
    if (n === 0 || n === 1) return false;
    if (n === 2) return true;

    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false
    }

    return true;
  }

  const answer = [];
  for (let i = 1; i <= t; i++) {
    const n = Number(input[i]);

    for (let i = n; ;i++) {
      if (map.has(i)) {
        if (map.get(i)) {
          answer.push(i);
          break;
        }
      } else {
        const isPrime = checkPrime(i);
        map.set(i, isPrime);
        if (isPrime) {
          answer.push(i);
          break;
        }
      }
    }
  }

  return answer.join('\n');
}

console.log(solve(input));
