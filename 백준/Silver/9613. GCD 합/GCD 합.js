const { count } = require('console');
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const t = parseInt(input[0]);

    const getGCD = (a,b) => {
        if (a === 0) return b;

        return getGCD(b%a, a);
    }

    let answer = [];
    for (let i = 1; i <= t; i++) {
        const row = input[i].split(' ').map(Number);
        const n = row.shift();

        let gcd = 0;
        for (let j = 0; j < n-1; j++) {
            const a = row[j];
            for (let k = j+1; k < n; k++) {
                const b = row[k];
                gcd += getGCD(a,b);
            }
        }
        answer.push(gcd);
    }

    return answer.join('\n');
}

console.log(solve(input));
