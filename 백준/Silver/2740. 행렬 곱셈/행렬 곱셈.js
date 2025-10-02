const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const [N,M] = input[0].split(' ').map(Number);
  const A = input.slice(1, N+1).map(n => n.split(' ').map(Number));
  const [_,K] = input[N+1].split(' ').map(Number);
  const B = input.slice(N+2).map(n => n.split(' ').map(Number));

  let answer = Array.from({length:N}, () => Array(K).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const a = A[i][j];
      
      for (let k = 0; k < K; k++) {
        const b = B[j][k];

        answer[i][k] = answer[i][k]+ a*b;
      }
    }
  }
  
  return answer.map(ans => ans.join(' ')).join('\n');
};

console.log(solve(input));
