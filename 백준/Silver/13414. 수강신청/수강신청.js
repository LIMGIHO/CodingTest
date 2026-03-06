const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [K,L] = input[0].split(' ').map(Number);
    const history = input.slice(1);

    const requestMap = new Map();
    for (let i = 0; i < L; i++) {
        const student = history[i];
        requestMap.set(student, i);
    }

    const sorted = [...requestMap].sort((a,b) => a[1] - b[1]);
    const max = Math.min(K, sorted.length)
    const answer = Array.from({length:max});    
    for (let i = 0; i < max; i++) {
        answer[i] = sorted[i][0];
    }

    return answer.join('\n');
}

console.log(solve(input));