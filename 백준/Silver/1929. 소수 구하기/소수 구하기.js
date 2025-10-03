const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const max = 1000001;
  const [M,N] = input[0].split(' ').map(Number);
  const arr = Array.from({length: max}, () => true);
  arr[0] = arr[1] = false;

  for (let i = 2; i <= max; i++) {
    if (arr[i]) {
      let next = i + i;
      while (next <= max) {
        arr[next] = false;
        next += i;
      }
    }
  }

  const answer = [];
  for (let i = M; i <= N; i++) {
    if (arr[i]) answer.push(i);
  }
  
  return answer.join('\n');
}

console.log(solve(input));