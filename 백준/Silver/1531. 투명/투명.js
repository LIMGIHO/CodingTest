const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [N,M] = input[0].split(' ').map(Number);
    const canvas = Array.from({length:100}, () => Array(100).fill(0));
    let answer = 0;
    for (let i = 1; i <= N; i++) {
        const [x1,y1,x2,y2] = input[i].split(' ').map(Number);

        for (let x = x1-1; x < x2; x++) {
            for (let y = y1-1; y < y2; y++){
                canvas[x][y]++;
            }
        }
    }

    return canvas.reduce((acc,arr) => acc + arr.filter(v => v > M).length, 0);
}

console.log(solve(input));