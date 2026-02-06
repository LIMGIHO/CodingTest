const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);

    let answer = 1;
    let max = [1,1];
    for (let i = 1; i < N; i++) {
        const a = arr[i-1];
        const b = arr[i];

        if (a <= b) 
            max[0]++;
        else {
            answer = Math.max(answer, max[0]);
            max[0] = 1;
        }
            

        if (a >= b) 
            max[1]++;
        else {
            answer = Math.max(answer, max[1]);
            max[1] = 1;
        }            
    }

    return Math.max(answer, ...max);
}

console.log(solve(input));