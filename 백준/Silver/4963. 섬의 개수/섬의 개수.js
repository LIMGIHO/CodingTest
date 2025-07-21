const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    let answer = [];
    const dir = [
        [0,1],[1,1],[1,0],[-1,1],
        [-1,0],[-1,-1],[0,-1],[1,-1]
    ]

    const countIsland = (island, sx, sy, row, col) => {
        if (island[sx][sy] === 0) return;
        
        island[sx][sy] = 0;

        for (const [x,y] of dir) {
            if (sx + x < row && sx + x >= 0 && sy + y < col && sy + y >= 0) {
                countIsland(island, sx + x, sy + y, row, col);
            }                
        }   
    }
    
    for (let i = 0; i < input.length; i++) {
        const [w, h] = input[i].split(' ').map(Number);
        
        if (w === 0 && h === 0) return answer.join('\n');

        const island = [];
        for (let j = i+1; j < i+h+1; j++) {
            //1. island 세팅
            //2. island 기준 DFS로 섬갯수 파악 후 answer.push
            island.push(input[j].split(' ').map(Number));
        }
        const row = island.length;
        const col = island[0].length;
        let count = 0;

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (island[i][j] === 1) {
                    count++;
                    countIsland(island, i, j, row, col);
                }        
            }
        }
        answer.push(count);
        i += h;
    }
}

console.log(solve(input));


