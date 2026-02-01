const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    let [N, M] = input[0].split(' ').map(Number);
    const maze = input.slice(1).map(m => m.split('').map(Number));
    const que = [[0,0,1]]; maze[0][0] = 0;
    let head = 0, tail = 0;

    let answer = 0;
    while (head <= tail) {
        const [x,y,cnt] = que[head++];

        if (x+1 === N && y+1 === M) {
            answer = cnt;
            break;
        }

        //상
        if (x-1 >= 0 && maze[x-1][y] === 1) {
            que.push([x-1,y, cnt+1]); tail++;
            maze[x-1][y] = 0;
        }
            
        //하
        if (x+1 < N && maze[x+1][y] === 1) {
            que.push([x+1,y,cnt+1]); tail++;
            maze[x+1][y] = 0;
        }

        //좌
        if (y-1 >= 0 && maze[x][y-1] === 1) {
            que.push([x,y-1,cnt+1]); tail++;
            maze[x][y-1] = 0;
        }

        //우
        if (y+1 < M && maze[x][y+1] === 1) {
            que.push([x,y+1,cnt+1]); tail++;
            maze[x][y+1] = 0;
        }

    }

    return answer;
}

console.log(solve(input));
