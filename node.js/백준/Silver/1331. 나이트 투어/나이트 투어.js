const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let board = Array.from({length:6}, () => new Array(6).fill(false));

const checkPossible = (cx, cy, nx, ny) => {
    let dx = [2,2,-2,-2,1,-1,1,-1];
    let dy = [1,-1,1,-1,2,2,-2,-2];

    for (let i = 0; i < dx.length; i++) {
        if (cx + dx[i] === nx && cy + dy[i] === ny) return true;
    }

    return false;
}

let answer = 'Valid'
input.push(input[0]);
for (let i = 1; i < input.length; i++) {
    let [cx, cy] = input[i-1].split("");
    let [nx, ny] = input[i].split("");
    
    cx = Number(cx.charCodeAt()) - 65;
    nx = Number(nx.charCodeAt()) - 65;
    cy = Number(cy) - 1;
    ny = Number(ny) - 1;

    // console.log(cx,cy,nx,ny, checkPossible(cx,cy,nx,ny))

    if (board[cx][cy] || !checkPossible(cx,cy,nx,ny)) {
        answer = 'Invalid';
        break;
    }

    board[cx][cy] = true;
}

console.log(answer);