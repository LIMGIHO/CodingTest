const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    let answer = 1;
    let max = Math.max(...input.slice(1).map(m => m.split(' ').map(Number)).flat())

    for (let rainfall = 1; rainfall < max; rainfall++) {
        const map = input.slice(1).map(m => m.split(' ').map(Number));
        let count = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (map[i][j] <= rainfall) continue;

                const que = [[i,j]];
                let head = 0, tail = 0;
                while (head <= tail) {
                    const [x,y] = que[head++];
                    
                    if (x-1 >= 0 && map[x-1][y] > rainfall) {
                        que.push([x-1,y]);
                        map[x-1][y] = 0;
                        tail++;
                    }
                    if (y-1 >= 0 && map[x][y-1] > rainfall) {
                        que.push([x,y-1]);
                        map[x][y-1] = 0;
                        tail++;
                    }
                    if (x+1 < N && map[x+1][y] > rainfall) {
                        que.push([x+1,y]);
                        map[x+1][y] = 0;
                        tail++;
                    }
                    if (y+1 < N && map[x][y+1] > rainfall) {
                        que.push([x,y+1]);
                        map[x][y+1] = 0;
                        tail++;
                    }
                }

                count++;
            }
        }
        answer = Math.max(answer, count);
    }


    return answer;
}

console.log(solve(input));