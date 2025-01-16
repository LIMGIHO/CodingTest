const fs = require("fs");
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

const TC = input.slice(1).map((line) => line.trim().split(' ').map(Number));

function solution(N, M) {
  const n = M;
  const r = N;
  const dp = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));

  // nC0, nCn = 1로 초기화
  for (let i = 1; i <= n; i++) {
    dp[i][0] = 1;
    dp[i][i] = 1;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      const combi = dp[i - 1][j - 1] + dp[i - 1][j];
      dp[i][j] = combi;
      dp[i][i - j] = combi;
    }
  }
  return dp[n][r];
}

const result = TC.map((testCase) => solution(testCase[0], testCase[1]));
console.log(result.join('\n'));