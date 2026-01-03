const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [n,m] = input[0].split(' ').map(Number);
    const canvas = input.slice(1).map(str => str.split(' ').map(Number))
       
    // 그림갯수, 가장 넓은 그림 사이즈
    let answer = [0,0];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (canvas[i][j] === 1) {
                answer[0]++;
                
                const que = [[i,j]];
                canvas[i][j] = 0;
                let head = 0, tail = 0, size = 0;
                
                while (head <= tail) {
                    size++;
                    const [r,c] = que[head++];
                    
                    if (r-1 >= 0 && canvas[r-1][c] === 1) {
                        que.push([r-1,c]);
                        canvas[r-1][c] = 0;
                        tail++;
                    }
                    if (c+1 < m && canvas[r][c+1] === 1) {
                        que.push([r,c+1]);
                        canvas[r][c+1] = 0;
                        tail++;
                    }
                    if (r+1 < n && canvas[r+1][c] === 1) {
                        que.push([r+1,c]);
                        canvas[r+1][c] = 0;
                        tail++;
                    }
                    if (c-1 >= 0 && canvas[r][c-1] === 1) {
                        que.push([r,c-1]);
                        canvas[r][c-1] = 0;
                        tail++;
                    }
                }
                
                if (answer[1] < size)
                    answer[1] = size;
            }
        }
    }

    return answer.join('\n');
}

console.log(solve(input));