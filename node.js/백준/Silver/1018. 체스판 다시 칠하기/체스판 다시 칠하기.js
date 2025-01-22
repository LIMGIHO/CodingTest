const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N, M] = input.shift().split(" ");
let board = input.map(str => str.split(''));

const checkChangeCell = (row, col) => {
    let target = ['W','B'];
    let count = [0,0];
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            //case 1
            if (board[row + i][col + j] !== target[0]) count[0]++;
            if (j !== 7) target[0] = target[0] === 'W' ? 'B' : 'W';
            
            //case 2
            if (board[row + i][col + j] !== target[1]) count[1]++;
            if (j !== 7) target[1] = target[1] === 'W' ? 'B' : 'W'; 
        }
    }

    return Math.min(...count);
}


let answer = Number.MAX_SAFE_INTEGER;
for (let row = 0; row <= N - 8; row++) {
    for (let col = 0; col <= M - 8; col++) {
        answer = Math.min(answer, checkChangeCell(row, col));
    }
}

console.log(answer);