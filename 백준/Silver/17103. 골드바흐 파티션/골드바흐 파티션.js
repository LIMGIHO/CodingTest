const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const t = Number(input[0]);
    const arr = input.slice(1).map(Number);
    
    /**
     * 1. arr 최대값 / 2 까지 소수 값 판별 primes<boolean> 생성성
     * 2. arr 루프 돌면서 primes 를 이용해 for loop, i 와 (target - i) 가 소수이면 answer ++;
     */

    const max = Math.max(...arr);
    const primes = Array.from({length:max+1}, () => true);
    for (let i = 2; i <= max; i++) {
        if (primes[i]) {
            let idx = i + i;
            while (idx <= max) {
                primes[idx] = false;
                idx += i;
            }
        }
    }

    const answer = Array.from({length:t}, () => 0);
    for (let i = 0; i < t; i++) {
        const target = arr[i];
        const set = new Set();
        
        for (let j = 2; j <= target / 2; j++) {
            const a = Math.min(j, target - j);
            const b = Math.max(j, target - j);
            // console.log("====", target, a, b, primes[a], primes[b])
            if (primes[a] && primes[b]) set.add([a,b].join(' '))
        }
        answer[i] = set.size;
    }

    return answer.join('\n');
}

console.log(solve(input));