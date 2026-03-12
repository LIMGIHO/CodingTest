const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N,K] = input[0].split(' ').map(Number);
    const line = input[1].split('');

    let answer = 0;
    for (let i = 0; i < N; i++) {
        const who = line[i];
        if ((who || 'H') === 'H') continue;

        for (let j = i - K; j <= i + K; j++) {
            if (j < 0) continue;

            if (line[j] === "H") {
                answer++;
                line[j] = ""
                break;
            }
        }
    }

    return answer;
}

console.log(solve(input));