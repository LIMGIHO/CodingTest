const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const M = Number(input[1]);
    const snail = Array.from({length:N}, () => Array(N));
    const direct = [[-1,0],[0,1],[1,0],[0,-1]];
    let dirIdx = 3;
    const mid = Math.floor(N/2);
    let x = mid; y = mid;


    let answer;
    const setNum = (x,y,n) => {
        if (n === M) answer = [x+1,y+1];

        snail[x][y] = n;
    }

    let num = 1;
    while (num <= N*N) {
        setNum(x,y,num++);
        const [cx, cy] = direct[dirIdx++ % 4];
        const [nx, ny] = direct[dirIdx % 4];

        while (x + cx >= 0 && y + cy >= 0 && x + cx < N && y + cy < N && snail[x + nx][y + ny]) {
            x += cx; y += cy;
            setNum(x,y,num++);
        }

        x += nx; y += ny;
    }

    return snail.map(s => s.join(' ')).join('\n') + '\n' + answer.join(' ');
}

console.log(solve(input));
