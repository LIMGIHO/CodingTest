const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let T = Number(input.shift());

let answer = Array(T).fill(0);
for (let i = 0; i < T; i++) {
    const [x1,y1,x2,y2] = input.shift().split(' ').map(Number);
    const n = Number(input.shift());

    for (let j = 0; j < n; j++) {
        const [x,y,r] = input.shift().split(' ').map(Number);
        let dist1 = Math.sqrt((x1-x)**2 + (y1-y)**2);
        let dist2 = Math.sqrt((x2-x)**2 + (y2-y)**2);
        if ((dist1 < r && dist2 < r) || (dist1 > r && dist2 > r)) {
            continue;
        } 
        
        answer[i]++;
    }
}

console.log(answer.join('\n'))