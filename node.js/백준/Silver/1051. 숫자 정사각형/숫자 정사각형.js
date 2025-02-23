const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N,M] = input.shift().split(' ').map(Number);
let board = input.map(str => str.split('').map(Number));
let len = Math.min(N,M);
let answer = 1;

if (len === 1) answer = 1;
else {
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < M; col++) {
            const size = board[row][col];

            for (let i = len-1; i > 0; i--) {
                // console.log("====", size, board[row + i][col], board[row + i][col + i], board[row][col + i])
                if (row+i < N && board[row + i][col] === size
                  && row+i < N && col + i < M && board[row + i][col + i] === size
                  && col + i < M && board[row][col + i] === size 
                ) {
                    answer = Math.max(answer, i + 1);
                    break;
                }
            }
        }       
    }
}

console.log(answer*answer)