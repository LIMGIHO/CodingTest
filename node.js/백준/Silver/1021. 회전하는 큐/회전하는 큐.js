const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [n, m] = input[0].split(' ').map(Number);
let target = input[1].split(' ').map(Number);
let que = new Array(n).fill(0).map((_,i) => i+1);
let answer = 0;

const move = (direct, t) => {
    while (t !== que[0]) {
        answer++;
        if (direct === 'left') que.push(que.shift());
        else que.unshift(que.pop());
    }
}

for (let i = 0; i < m; i++) {
    let t = target[i];
    let idx = que.indexOf(t);
    if (idx < que.length/2) move('left', t);
    else move('right', t);

    que.shift();
}

console.log(answer)