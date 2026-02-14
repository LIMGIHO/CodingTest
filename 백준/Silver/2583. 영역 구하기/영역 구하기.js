const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [M,N,K] = input[0].split(' ').map(Number);
    const paper = Array.from({length:M}, () => Array(N).fill(0));

    for (let i = 1; i <= K; i++) {
        const [x1,y1,x2,y2] = input[i].split(' ').map(Number);

        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                paper[y][x] = 1;
            }
        }
    }

    let answer = [0, []];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (paper[j][i] === 1) continue;

            answer[0]++;
            let width = 1;
            const que = [[j,i]];
            paper[j][i] = 1;
            while (que.length) {
                const [y,x] = que.shift();

                if (y-1 >= 0 && paper[y-1][x] === 0) {
                    que.push([y-1,x]);
                    paper[y-1][x] = 1;
                    width++;
                }

                if (y+1 < M && paper[y+1][x] === 0) {
                    que.push([y+1,x]);
                    paper[y+1][x] = 1;
                    width++;
                }

                if (x-1 >= 0 && paper[y][x-1] === 0) {
                    que.push([y,x-1]);
                    paper[y][x-1] = 1;
                    width++;
                }

                if (x+1 < N && paper[y][x+1] === 0) {
                    que.push([y,x+1]);
                    paper[y][x+1] = 1;
                    width++;
                }
            }

            answer[1].push(width);
        }
    }

    return answer[0] + '\n' + answer[1].sort((a,b) => a-b).join(' ')
}

console.log(solve(input));