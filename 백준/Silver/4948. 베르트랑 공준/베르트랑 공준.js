const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n').map(Number);

const solve = (input) => {
    let answer = [];
    let prime = Array.from({length:(123456 * 2) + 1}, (_, i) => {
        if (i < 2) return false;

        for (let num = 2; num * num <= i; num++) {
            if (i % num === 0) return false;
        }

        return true;
    });

    //1. 123456*2까지 소수인 값 true
    //2. input loop 돌면서 n ~ 2n 구간 소수 카운트
    //3. input 값이 0일때까지 while

    const getPrimeCount = (from, to) => {
        let count = 0;
        for (let i = from; i <= to; i++) {
            if (prime[i]) count++;
        }

        return count;
    }

    for (const n of input) {
        if (n === 0) break;

        answer.push(getPrimeCount(n+1, 2*n));
    }

    return answer.join('\n');
}

console.log(solve(input));


