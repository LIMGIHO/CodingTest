const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [n,m] = input[0].split(':').map(Number);

    const getGCD = (a,b) => {
        if (a === 0) return b;
        return getGCD(b%a, a);
    }

    const gcd = getGCD(n,m);
    return `${n/gcd}:${m/gcd}`;
}

console.log(solve(input));
