const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [A,B] = input[0].split(' ').map(Number);
    
    const getGCD = (a,b) => {
        if (!a) return b;

        return getGCD(b%a, a);
    }
    return (A * B) / getGCD(A, B);
}

console.log(solve(input));