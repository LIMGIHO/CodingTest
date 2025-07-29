const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const maxNum = 10000;
    const t = Number(input[0]);
    const nums = input.slice(1).map(Number);
    const primes = Array.from({length:maxNum+1}, () => true);

    const isPrime = (x) => {
        if (x === 2) return true;

        for (let i = 2; i*i <= x; i++) {
            if (x % i === 0) return false;
        }

        return true;
    }

    for (let i = 2; i <= maxNum; i++) {
        if (primes[i] && isPrime(i)) {            
            let idx = 2;
            while(i * idx <= maxNum) primes[i * idx++] = false;

        }
    }

    const answer = [];
    for (const n of nums) {
        for (let i = Math.floor(n/2); i > 1; i--) {
            const a = i;
            const b = n - i;
            if (primes[a] && primes[b]) {
                answer.push(a + ' ' + b);
                break;
            }
        }
    }
    
    return answer.join('\n')
}

console.log(solve(input));


