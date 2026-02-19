const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);

    const getGCM = (a,b) => {
        if (a === 0) return b;

        return getGCM(b%a, a);
    }

    const answer = [];
    for (let i = 1; i <= N; i++) {
        const [a,b] = input[i].split(' ').map(Number);
        const gcm = getGCM(a,b);
        answer.push(a*b/gcm)
    }

    return answer.join('\n');
}

console.log(solve(input));