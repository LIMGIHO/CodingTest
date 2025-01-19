const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/).map(Number);
let [N, K] = input;
let primeSet = new Set();
let answer = K >= 1 ? 1 : 0;

const setPrime = () => {
  for (let i = 2; i <= N; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      if (i <= K) answer++;
      primeSet.add(i);
    }
  }
}

setPrime();
const primeArr = Array.from(primeSet);
for (let i = 2; i <= N; i++) {
  if (primeSet.has(i)) continue;

  let num = i;
  let temp = [];
  for (let j = 0; j < primeArr.length; j++) {
    while (num > 1 && num % primeArr[j] === 0) {
      num /= primeArr[j];
      temp.push(primeArr[j]);
    }

    if (primeSet.has(num)) {
      temp.push(num);
      break;
    }

    if (num === 1) break;
  }

  if (temp[temp.length-1] <= K) answer++;
}

console.log(answer);