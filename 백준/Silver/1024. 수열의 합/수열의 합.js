const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [n, l] = input[0].split(' ').map(Number);
    
    // L부터 100까지 시도
    for (let len = l; len <= 100; len++) {
        // a를 구하는 공식
        const numerator = n - (len * (len - 1)) / 2;
        
        // 나누어떨어지고 음이 아닌 정수인지 확인
        if (numerator % len === 0) {
            const a = numerator / len;
            
            if (a >= 0) {
                // 연속된 수들 생성
                const result = [];
                for (let i = 0; i < len; i++) {
                    result.push(a + i);
                }
                return result.join(' ');
            }
        }
    }
    
    return -1;
}

console.log(solve(input));
