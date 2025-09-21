const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const n = Number(input[0]);
  const room = input.slice(1).map(r => r.split(''));

  let answer = [0,0];
  for (let i = 0; i < n; i++) {
    let isRow = 0;
    let isCol = 0;
    for (let j = 0; j < n; j++) {
      /* 가로체크 */
      const row = room[i][j];
      if (row === '.') isRow++;
      else {
        if (isRow >= 2) answer[0]++;
        isRow = 0;
      }

      /* 세로체크 */
      const col = room[j][i];
      if (col === '.') isCol++;
      else {
        if (isCol >= 2) answer[1]++;
        isCol = 0;
      }

    }

    if (isRow >= 2) answer[0]++;
    if (isCol >= 2) answer[1]++;

  }

  return answer.join(' ')
}

console.log(solve(input));