const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    let num = Number(input[0]);
    if (num === 0) return 0;
    
    let answer = '';    
    while (num !== 0) {
        let quotient = Math.trunc(num/-2);
        let remainder = num % -2;

        if (remainder < 0) {
            remainder += 2;
            quotient += 1;
        }
        num = quotient;

        answer = remainder.toString() + answer;

    }
    return answer;
}

console.log(solve(input));
