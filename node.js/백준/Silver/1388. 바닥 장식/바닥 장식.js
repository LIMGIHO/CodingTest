const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N, M] = input.shift().split(" ")
let room = input.map(arr => arr.split(""));

let answer = 0;
for (let i = 0; i < N; i++) {
    let tile = '';
    let j = 0;
    while (j < M) {
        if (room[i][j] === '-') {
            if (room[i][j] !== tile) {
                tile = room[i][j];
                answer++;
            }
        } else tile ='';
        j++;
    }

    
}

for (let i = 0; i < M; i++) {
    let tile = '';
    let j = 0;
    while (j < N) {
        if (room[j][i] === '|') {
            if (room[j][i] !== tile) {
                tile = room[j][i];
                answer++;
            }
        } else tile ='';
        j++;
    }
    // console.log(answer)
}

console.log(answer);