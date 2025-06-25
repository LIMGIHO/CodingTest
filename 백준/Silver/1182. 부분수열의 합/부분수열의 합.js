'use strict';

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

function solve(lines) {
    const [N,S] = lines[0].split(' ').map(Number);
    const arr = lines[1].split(' ').map(Number);

    let answer = 0;

    const check = Array.from({length: N}, () => false);
    const DFS = (sum, idx) => {
      if (sum === S) {
        answer++;
      }

      for (let i = idx; i < N; i++) {
        if (check[i]) continue;
        check[i] = true;
        DFS(sum + arr[i], i+1);
        check[i] = false;
      }
    }

    DFS(null,0);

    console.log(answer);
  }

solve(input);
