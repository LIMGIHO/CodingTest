const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [N,M] = input[0].trim().split(' ').map(Number);
    const S = new Set();
    
    for (let i = 1; i <= N; i++) {
        S.add(input[i].trim());
    }

    let answer = 0;
    for (let i = N+1; i <= N+M; i++) {
        const str = input[i].trim();
        if (S.has(str)) answer++;
    }
 
    return answer;
}

console.log(solve(input));