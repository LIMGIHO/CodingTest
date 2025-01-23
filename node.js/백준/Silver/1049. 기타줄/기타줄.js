const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N, M] = input[0].split(" ").map(Number);
let guitarLinePrice = input.slice(1).map(arr => arr.split(" ").map(Number));

let answer = Number.MAX_SAFE_INTEGER;
const mok = Math.floor(N / 6);
const remain = N % 6;
let minSet = Number.MAX_SAFE_INTEGER;
let minEach = Number.MAX_SAFE_INTEGER;
guitarLinePrice.forEach(arr => {
    const [setP, eachP] = arr;
    
    minSet = Math.min(setP,minSet);
    minEach = Math.min(eachP, minEach);
})

answer = Math.min(minSet * (mok + 1), minEach * N);
answer = Math.min(answer, minSet * mok + minEach * remain);

console.log(answer);