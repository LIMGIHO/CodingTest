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
    const nums = S[1].split(' ').map(Number);

    let answer = 1;
    let dp = Array.from({length: 10000},  () => 1);
    dp[0] = 1;

    for (let i = 1; i < n; i++) {
        let num = nums[i];
        
        for (let j = i - 1; j >= 0; j--) {
            const x_num = nums[j];
            if (num > x_num) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
                answer = Math.max(answer, dp[i]);
            }
        }
    }

    console.log(answer);
}

solve(input);