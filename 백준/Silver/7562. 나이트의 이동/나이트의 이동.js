const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const T = Number(input[0]);
    const direct = [[-2,-1],[-2,1],[-1,-2],[-1,2],[2,-1],[2,1],[1,-2],[1,2]];

    const answer = Array.from({length:T})
    for (let t = 0; t < T; t++) {
        const idx = t * 3;
        const I = input[idx+1];
        const visited = Array.from({length:I}, () => Array(I).fill(0));

        const [sx,sy] = input[idx+2].split(' ').map(Number);
        const [tx,ty] = input[idx+3].split(' ').map(Number);

        if (sx === tx && sy === ty) {
            answer[t] = 0;
            continue;
        }

        const isPossible = (x,y) => {
            if (x < I && x >= 0 && y < I && y >= 0) {
                if (visited[x][y] === 1) return false;

                return true;
            }
    
            return false;
        }

        const que = [[sx,sy,0]];
        while (que.length) {
            const [x,y,c] = que.shift();

            for (const [nx, ny] of direct) {
                if (isPossible(x + nx, y + ny)) {
                    if (x+nx === tx && y+ny === ty) {
                        answer[t] = c+1;
                        break;
                    }

                    que.push([x+nx, y+ny, c+1]);
                    visited[x+nx][y+ny] = 1;
                }
            }

            if (answer[t]) break;
        }
    }

    return answer.join('\n');
}

console.log(solve(input));