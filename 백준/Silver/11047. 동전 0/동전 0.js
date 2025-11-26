const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [N, K] = input[0].split(' ').map(Number);
    const arr = input.slice(1).map(Number);

    let answer = 0;
    let sum = 0;
    for (let i = N - 1; i >= 0; i--) {
        let coin = arr[i];
        while (sum + coin <= K) {
            answer++;
            sum += coin;
        }

        if (sum === K) return answer;
    }
}

console.log(solve(input));