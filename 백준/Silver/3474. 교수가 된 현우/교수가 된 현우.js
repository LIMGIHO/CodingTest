const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const T = Number(input[0]);
    const nums = input.slice(1).map(Number);
    
    const answer = [];
    for (const num of nums) {
        let divider = 5;
        let zeroCount = 0;
        while (num >= divider) {
            zeroCount += Math.floor(num / divider);
            divider *= 5;
        }

        answer.push(zeroCount);
    }

    return answer.join('\n');

}

console.log(solve(input));
