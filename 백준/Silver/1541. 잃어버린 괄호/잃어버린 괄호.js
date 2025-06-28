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
    const arr = lines[0].split('-');
    let answer = arr.reduce((sum, str, idx) => {
        const num = str.split('+').reduce((innerSum, num) => innerSum + parseInt(num), 0);
        if (idx === 0) return num;
        return sum - num;
    }, 0);
   
    console.log(answer);
}

solve(input);
