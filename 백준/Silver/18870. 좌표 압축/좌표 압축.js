const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const map = new Map();
    const arr = input[1].split(' ').map(Number);
    const sortedDistinctArr = [...new Set(arr)].sort((a,b) => a-b);

    for (let i = 0; i < sortedDistinctArr.length; i++) {
        map.set(sortedDistinctArr[i], i);
    }
    
    for (let i = 0; i < N; i++) {
        arr[i] = map.get(arr[i]);
    }

    return arr.join(' ');
}

console.log(solve(input));

