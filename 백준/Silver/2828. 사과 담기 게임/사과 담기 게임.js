const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const J = Number(input[1]);
    const appleLoc = input.slice(2, 2+J).map(Number);
    
    let answer = 0;
    let l = 1; r = M;
    for (const loc of appleLoc) {
        if (loc >= l && loc <= r) continue;

        if (r < loc) {
            const move = loc - r;
            answer += move;
            l += move;
            r += move;
        } else {
            const move = l - loc;
            answer += move;
            l -= move;
            r -= move;
        }
    }

    return answer;
}

console.log(solve(input));