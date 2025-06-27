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
    const [K, N] = lines[0].split(' ').map(Number);
    const arr = [];
    let min = 1, max = 0;
    
    for (let i = 1; i <= K; i++) {
        const length = Number(lines[i]);  // 문자열을 숫자로 변환
        arr.push(length);
        max = Math.max(max, length);  // 숫자끼리 비교
    }
    
    let answer = 0;
    
    while (min <= max) {  // <= 조건 사용
        const mid = Math.floor((min + max) / 2);
        let count = 0;
        
        for (const a of arr) {
            count += Math.floor(a / mid);
        }
        
        if (count >= N) {
            answer = mid;  // 현재 mid가 가능한 답
            min = mid + 1;  // 더 큰 값 탐색
        } else {
            max = mid - 1;  // 더 작은 값 탐색
        }
    }
    
    console.log(answer);
}

solve(input);
