const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const A = input[1].split(' ').map(Number);
    const B = new Set(input[2].split(' ').map(Number));
    
    const answer = [];
    for (const a of A) {
        if (!B.has(a))
            answer.push(a);
    }

    if (answer.length === 0) return '0';
    return answer.length + '\n' + answer.sort((a,b) => a-b).join(' ');
}

console.log(solve(input));