const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const [N,M] = input[0].split(' ').map(Number);

  const answer = []; 
  const set = new Set();
  for (let i = 1; i <= N+M; i++) {
    const name = input[i];
    if (set.has(name)) answer.push(name);

    set.add(name);
  }

  return [answer.length, ...answer.sort()].join('\n');
};

console.log(solve(input));
