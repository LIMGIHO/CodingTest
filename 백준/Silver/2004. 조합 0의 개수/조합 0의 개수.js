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

function countNumber(n, p) {
    let count = 0;
    let div = p;
    while (n >= div) {
        count += Math.floor(n / div);
        div *= p;
    }
    return count;
}

function solve(S) {
    const [n, m] = S[0].split(' ').map(Number);
    
    // nCm = n! / (m! * (n-m)!)
    // 2의 개수: n의 2의 개수 - m의 2의 개수 - (n-m)의 2의 개수
    // 5의 개수: n의 5의 개수 - m의 5의 개수 - (n-m)의 5의 개수
    
    const count2 = countNumber(n, 2) - countNumber(m, 2) - countNumber(n-m, 2);
    const count5 = countNumber(n, 5) - countNumber(m, 5) - countNumber(n-m, 5);
    
    // 2와 5 중 더 작은 수가 10을 만들 수 있는 개수
    console.log(Math.min(count2, count5));
}

solve(input);