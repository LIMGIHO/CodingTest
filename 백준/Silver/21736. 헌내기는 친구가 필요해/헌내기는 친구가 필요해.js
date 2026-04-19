const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N,M] = input[0].split(' ').map(Number);
    const campus = input.slice(1).map(str => str.split(''));

    const findMyLoc = () => {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (campus[i][j] === 'I') {
                    return [i,j];
                }
            }
        }
    }

    const cur = findMyLoc();
    const que = [cur];
    let h = 0, t = 0;
    let answer = 0;

    const setMove = (x,y) => {
        if (campus[x][y] === 'P')
            answer++;

        que.push([x, y]); t++;
        campus[x][y] = 'X';
        
    }

    while (h <= t) {
        const [x, y] = que[h++];

        if (x + 1 < N && campus[x+1][y] !== 'X') {
            setMove(x+1, y);
        }

        if (x - 1 >= 0 && campus[x-1][y] !== 'X') {
            setMove(x-1, y);
        }

        if (y + 1 < M && campus[x][y+1] !== 'X') {
            setMove(x, y+1);
        }

        if (y - 1>= 0 && campus[x][y-1] !== 'X') {
            setMove(x, y-1);
        }
    }

    return answer === 0 ? 'TT' : answer;
}

console.log(solve(input));

