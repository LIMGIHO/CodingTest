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

    let answer = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (const num of nums) {
      answer = Math.max(answer, sum+num);
      if (sum + num < 0) {
        sum = 0;
      } else {
        sum += num;
      }
    }
    console.log(answer);
}

solve(input);
