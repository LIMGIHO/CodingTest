const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    let X = input[0];
    let count = 0;
    while (X.length > 1) {
        let newNum = 0;
        for (let i = 0; i < X.length; i++) {
            newNum += +X[i]
        }

        X = String(newNum);
        count++;
    }

    const answer = [count, X%3===0 ? 'YES' : 'NO'];
    return answer.join('\n');
}

console.log(solve(input));