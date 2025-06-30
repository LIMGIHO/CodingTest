const fs = require('fs');

// 입력 전체를 읽어서, 줄 단위 배열로 만들기
let inputPath = '/dev/stdin';
// 개발 환경에서는 dev/stdin 파일 사용
if (fs.existsSync('dev/stdin')) {
    inputPath = 'dev/stdin';
}

const input = fs.readFileSync(inputPath)
  .toString()
  .trim()
  .split('\n');

function solve(S) {
    const n = Number(S[0]);
    const dp = new Array(n+1).fill(Infinity);
    dp[0] = 0; dp[1] = 1, dp[2] = 2, dp[3] = 3;

    for (let i = 4; i <= n; i++) {
      for (let j = 2; j*j <= i; j++) {
        dp[i] = Math.min(dp[i-1] + 1, dp[i-j*j] + 1, dp[i]);
      }
    }
    
    console.log(dp[n]);
}

solve(input);
