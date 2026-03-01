const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const arr = input.slice(0).map(Number);
    
    const max = 1000000;
    const primes = new Uint8Array(max);
    
    for (let i = 2; i <= max; i++) {
        // 0 : 소수, 1 : 비소수
        if (primes[i] === 0) {
            let idx = i + i;
            while (idx <= max) {
                if (primes[idx] === 0) {
                    primes[idx] = 1;
                }
                idx += i;
            }
        }
    }

    const answer = [];
    for (const n of arr) {
        if (n === 0) break;

        let isPossible = false;
        for (let i = 2; i <= max; i++) {
            if (primes[i] === 1) continue;

            const a = i;
            const b = n - a;

            // console.log("====n", n, a, b)

            if (primes[b] === 0) {
                isPossible = true;
                answer.push(`${n} = ${a} + ${b}`);
                break;
            }
        }

        if (!isPossible)
            answer.push(`Goldbach's conjecture is wrong.`);
    }
    
    return answer.join('\n');
}

console.log(solve(input));