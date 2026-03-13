const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N,X] = input[0].split(' ').map(Number);
    const dayVisit = input[1].split(' ').map(Number);

    const answer = [0,0];
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += dayVisit[i];

        if (i >= X) {
            sum -= dayVisit[i - X];
        }

        if (answer[0] <= sum) {
            if (answer[0] === sum)
                answer[1]++;
            else {
                answer[0] = sum;
                answer[1] = 1;
            }
            
        }
    }

    if (answer[0] === 0) return 'SAD'
    else return answer.join('\n');
}

console.log(solve(input));