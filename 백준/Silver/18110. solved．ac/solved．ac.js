const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    if (N === 0) return 0;

    const opinions = input.slice(1).map(Number).sort((a,b) => a-b);
 
    let sum = 0;
    const remove = Math.round(N * 0.15);
    
    for (let i = remove; i < N - remove; i++) {
        sum += opinions[i];
    }
    return Math.round(sum / (N-remove*2));
}

console.log(solve(input));