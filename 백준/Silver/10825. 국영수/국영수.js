const fs = require('fs');
const { compileFunction } = require('vm');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const arr = input.slice(1)
                    .map(a => a.split(' ')
                    .map((n,i)=> i > 0 ? Number(n) : n))
                    .sort((a,b) => {
                        if (a[1] !== b[1]) return b[1] - a[1];
                        if (a[2] !== b[2]) return a[2] - b[2];
                        if (a[3] !== b[3]) return b[3] - a[3];
                        
                        return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
                    })
                    ;

    const answer = arr.map(a => a[0]);
    return answer.join('\n');
}

console.log(solve(input));