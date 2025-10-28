const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);
  const circles = input[1].split(' ').map(Number);

  const getGCD = (a,b) => {
    if (a === 0) return b;

    return getGCD(b%a, a);
  }

  const answer = [];
  let first = circles[0];
  for (let i = 1; i < N; i++) {
    const gcd = getGCD(first, circles[i]);
    answer.push(`${first/gcd}/${circles[i]/gcd}`);
  }
  return answer.join('\n');
}

console.log(solve(input));
