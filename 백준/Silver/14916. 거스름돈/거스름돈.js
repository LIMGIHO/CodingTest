const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const n = Number(input[0]);

    let five = Math.floor(n / 5);
    let two = 1;

    while (five >= 0 && two >= 0) {
        two = Math.floor((n-five*5) / 2);
        if (five * 5 + two * 2 === n) return five + two;

        five--;
    }
    
    return -1
}

console.log(solve(input));