const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const brakets = input[0].split('');
    let answer = 0;
    let stick = 0;
    let x_braket;
    for (let i = 0; i < brakets.length; i++) {
        const braket = brakets[i];
        if (braket === '(') {
            stick++;
        } else {
            stick--;
            if (x_braket === '(') answer += stick;
            else answer++;
        }
        x_braket = braket;
    }

    return answer + stick;
}

console.log(solve(input));


