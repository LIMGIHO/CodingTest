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
    const n = Number(S.shift());
    const arr = S.map(Number);
    
    let idx = 0;
    const stack = [];
    const answer = [];

    // 1. 1 ~ n 까지 for 하면서 stack.push(i), answer에 + 추가
    // 2. while (stack.top() !== arr[idx])stack.pop(), answer에 - 추가
    for (let i = 1; i <= n; i++) {
      stack.push(i);
      answer.push('+');

      while (stack.length > 0 && stack[stack.length - 1] === arr[idx]) {
        answer.push('-');
        stack.pop();
        idx++;
      }
    }

    if (idx === n) {
      console.log(answer.join('\n')); 
    } else {
      console.log('NO');
    }
}

solve(input);
