const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const N = Number(input[0]);
  const card = Array.from({length:N}, (_,i) => i+1);
  let lt = 0; rt = N-1;

  while (lt <= rt) {
    lt++;

    if (lt >= rt) break;
    card.push(card[lt++]);
    rt++;
  }
  return card[rt];
}

console.log(solve(input));
