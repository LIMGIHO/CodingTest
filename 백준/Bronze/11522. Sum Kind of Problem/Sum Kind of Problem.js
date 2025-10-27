const fs = require('fs');
// const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
// const input = fs.readFileSync(0).toString().trim().split(/\r?\n/);
const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  let P = Number(input[0]);

  let answer = [];
  for (let i = 1; i <= P; i++) {
    const [K,N] = input[i].split(' ').map(Number);

    let result = [K,0,0,0]
    result[1] = ((N+1) * N) / 2;
    result[2] = N * N;
    result[3] = N * (N+1);

    answer.push(result.join(' '));
  }
  

  return answer.join('\n');
}

console.log(solve(input));
