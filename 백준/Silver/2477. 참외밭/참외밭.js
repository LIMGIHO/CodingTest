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

  //1. 제일 긴 높이, 너비 구하기
  //2. 다시 돌면서 맥스값과 인접하지 않은 변의 길이 구하기
function solve(S) {
    const k = Number(S[0]);
    const hexagon = [];
    for (let i = 1; i < S.length; i++) {
      hexagon.push(S[i].split(' ').map(Number));
    }

    let maxHeight = 0;
    let maxWidth = 0;
    let minHeight = 0;
    let minWidth = 0;

    for (const [dx, len] of hexagon) {
      if (dx === 1 || dx === 2) {
        maxWidth = Math.max(maxWidth, len);
      } else {
        maxHeight = Math.max(maxHeight, len);
      }
    }

    for (let i = 0; i < hexagon.length; i++) {
      const [__, beforeLen] = hexagon[i === 0 ? hexagon.length - 1 : i - 1];
      const [dx, len] = hexagon[i];
      const [_, nextLen] = hexagon[(i + 1) % hexagon.length];

      if (dx === 1 || dx === 2) {
        if (beforeLen !== maxHeight && len !== maxWidth && nextLen !== maxHeight) {
          minWidth = len;
        }
      } else {
        if (beforeLen !== maxWidth && len !== maxHeight && nextLen !== maxWidth) {
          minHeight = len;
        }
      }
    }
  
    console.log(((maxHeight * maxWidth) - (minHeight * minWidth)) * k);
}

solve(input);


