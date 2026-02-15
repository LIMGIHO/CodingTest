const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const area = input.slice(1).map(a => a.split('').map(Number));

    const answer = [0, []];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (area[i][j] === 0) continue;
            area[i][j] = 0;
            answer[0]++;

            const que = [[i,j]];
            let cnt = 1;
            while (que.length > 0) {
                const [x,y] = que.shift();

                if (x-1 >= 0 && area[x-1][y] === 1) {
                    area[x-1][y] = 0;
                    que.push([x-1,y]);
                    cnt++;
                }

                if (y-1 >= 0 && area[x][y-1] === 1) {
                    area[x][y-1] = 0;
                    que.push([x,y-1]);
                    cnt++;
                }

                if (x+1 < N && area[x+1][y] === 1) {
                    area[x+1][y] = 0;
                    que.push([x+1,y]);
                    cnt++;
                }

                if (y+1 < N && area[x][y+1] === 1) {
                    area[x][y+1] = 0;
                    que.push([x,y+1]);
                    cnt++;
                }
            }
            answer[1].push(cnt);
        }
    }

    return answer[0] + '\n' + answer[1].sort((a,b)=>a-b).join('\n');
}

console.log(solve(input));