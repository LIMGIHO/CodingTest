const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    const A = input[1].split(' ').map(Number);
    const B = input[2].split(' ').map(Number);
    const M = Number(input[3]);
    const C = input[4].split(' ').map(Number);

    const answer = [];
    const deque = [];

    let st = 0;
    for (let i = N-1; i >= 0; i--) {
        if (A[i] === 0) {
            deque.push(B[i]);
        }        
    }

    for (let i = 0; i < M; i++) {
        const num = C[i];

        deque.push(num);
        answer.push(deque[st++]);
    }
    return answer.join(' ');
}

console.log(solve(input));