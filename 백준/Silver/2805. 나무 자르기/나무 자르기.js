const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    let answer = 0;
    const [n,m] = input[0].split(' ').map(Number);
    const trees = input[1].split(' ').map(Number);
    
    let left = 0;
    let right = Math.max(...trees);
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let length = 0;

        for (let i = 0; i < trees.length; i++) {
            length += Math.max(trees[i] - mid, 0);
        }

        if (length >= m) {
            answer = Math.max(mid, answer);
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}

console.log(solve(input));