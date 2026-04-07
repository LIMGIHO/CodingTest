const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const board = input.slice(1).map(str => str.split(' ').map(Number));

    let h = 0, t = 0;
    const que = [[0,0]];    
    while (h <= t) {
        const [x,y] = que[h++];

        const move = board[x][y];
        if (move === -1) {
            return 'HaruHaru';
        }

        if (move === 0) continue

        if (x + move < N) {
            que.push([x+move, y]);
            board[x][y] = 0;
            t++;
        }

        if (y + move < N) {
            que.push([x, y+move]);
            board[x][y] = 0;
            t++;
        }
    }

    return 'Hing';
}

console.log(solve(input));
