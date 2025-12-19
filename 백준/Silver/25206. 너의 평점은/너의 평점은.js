const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    let answer = 0;
    const gradeMap = {
        'A+': 4.5,
        'A0': 4.0,
        'B+': 3.5,
        'B0': 3.0,
        'C+': 2.5,
        'C0': 2.0,
        'D+': 1.5,
        'D0': 1.0,
        'F': 0.0
    };

    let credits = 0;
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        const [_, credit, grade] = input[i].trim().split(' ');
        
        if (gradeMap[grade] !== undefined) {
            credits += +credit;
            total += +credit * +gradeMap[grade];
        }
    }

    if (credits === 0) return '0.000000';

    return (total / credits).toFixed(6);
}

console.log(solve(input));