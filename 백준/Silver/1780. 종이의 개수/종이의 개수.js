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
    const len = Number(S.shift());
    const arr = S.map(v => v.split(' ').map(Number));
    const answer = {"-1":0, "0":0, "1":0};

    function count(x, y, n) {
        const first = arr[x][y];
        let same = true;
        for (let i = x; i < x + n; i++) {
            for (let j = y; j < y + n; j++) {
                if (arr[i][j] !== first) {
                    same = false;
                    break;
                }
            }
            if (!same) break;
        }
        if (same) {
            answer[first]++;
            return;
        }
        const m = n / 3;
        for (let dx = 0; dx < 3; dx++) {
            for (let dy = 0; dy < 3; dy++) {
                count(x + dx * m, y + dy * m, m);
            }
        }
    }

    count(0, 0, len);
    ["-1", "0", "1"].forEach(key => console.log(answer[key]));
}

solve(input);
