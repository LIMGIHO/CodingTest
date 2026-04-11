const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [n,m] = input[0].split(' ').map(Number);
    const map = input.slice(1).map(str => str.split(' ').map(Number));
    const answer = Array.from({length:n}, () => Array(m).fill(-1));

    let st = 0, et = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (map[i][j] === 2) {
                st = i; et = j;
            } else if (map[i][j] === 0) {
                answer[i][j] = 0;
            }
        }
    }

    const que = [[st, et]];
    answer[st][et] = 0;
    while (que.length) {
        const [x,y] = que.shift();
        const distance = answer[x][y];

        if (x-1 >= 0 && map[x-1][y] === 1) {
            map[x-1][y] = 0;
            answer[x-1][y] = distance + 1;
            que.push([x-1,y]);
        }

        if (x+1 < n && map[x+1][y] === 1) {
            map[x+1][y] = 0;
            answer[x+1][y] = distance + 1;
            que.push([x+1,y]);
        }

        if (y-1 >= 0 && map[x][y-1] === 1) {
            map[x][y-1] = 0;
            answer[x][y-1] = distance + 1;
            que.push([x,y-1]);
        }

        if (y+1 < m && map[x][y+1] === 1) {
            map[x][y+1] = 0;
            answer[x][y+1] = distance + 1;
            que.push([x,y+1]);
        }
    }

    return answer.map(arr => arr.join(' ')).join('\n');
}

console.log(solve(input));

