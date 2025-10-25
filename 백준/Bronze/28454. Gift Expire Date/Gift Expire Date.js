const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  let [c_y, c_m, c_d] = input[0].split('-').map(Number);
  let N = Number(input[1]);

  let answer = 0;
  for (let i = 2; i <= N+1; i++) {
    const [y,m,d] = input[i].split('-').map(Number);

    if (c_y < y) answer++;
    else if (c_y === y && c_m < m) answer++;
    else if (c_y === y && c_m === m && c_d <= d) answer++;
  }

  return answer;
}

console.log(solve(input));