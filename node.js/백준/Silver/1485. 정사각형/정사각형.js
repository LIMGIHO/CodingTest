const fs = require("fs");
const readline = require('readline');
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [n] = input.shift().split(' ').map(Number);
let arr = input.map(str => str.split(' ').map(Number));
let answer = [];

const getDistance = (x1,y1,x2,y2) => {
    return Math.sqrt((x2-x1)**2 + (y2-y1)**2);
}

for (let i = 0; i < n; i++) {
    const [x1,y1] = arr[i*4];
    const [x2,y2] = arr[i*4+1];
    const [x3,y3] = arr[i*4+2];
    const [x4,y4] = arr[i*4+3];

    const d1 = getDistance(x1,y1,x2,y2);
    const d2 = getDistance(x2,y2,x3,y3);
    const d3 = getDistance(x3,y3,x4,y4);
    const d4 = getDistance(x4,y4,x1,y1);
    const d5 = getDistance(x1,y1,x3,y3);
    const d6 = getDistance(x2,y2,x4,y4);

    const sorted = [d1,d2,d3,d4,d5,d6].sort((a,b)=>a-b);
    
    const [a,b,c,d,e,f] = sorted;
    if (a === b && b === c && c === d && e === f) answer.push(1);
    else answer.push(0);
}

console.log(answer.join('\n'));