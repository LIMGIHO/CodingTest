const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    // const windows = Array.from({length:N+1}, () => false);

    // const setWindow = (id) => {
    //     for (let i = id; i <= N; i+=id) {
    //         windows[i] = windows[i] ? false : true;
    //     }
    // }

    // for (let i = 1; i <= N; i++) {
    //     setWindow(i);
    //     console.log(windows)
    // }
    
    // return windows.reduce((acc,w) => w ? acc + 1 : acc, 0);
    return Math.floor(Math.sqrt(N))
}

console.log(solve(input));