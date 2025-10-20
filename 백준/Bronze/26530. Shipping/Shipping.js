const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input.shift());
  
  let answer = [];
  for (let i = 0; i < N; i++) {
    const x = input.shift();
    let total = 0;
    for (let j = 0; j < x; j++) {
      const arr = input.shift();
      const [_, q, c] = arr.split(' ');

      total += +q * +c
    }
    answer.push(`$${total.toFixed(2)}`);
  }

  return answer.join('\n');
};

console.log(solve(input));
