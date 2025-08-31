const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const n = 5;
    const len = 6;
    let arr = input.map(arr => arr.split(' ').map(Number));
    let answer = new Set();

    /**
     * 각 시작접부터 5번의 이동(상,하,좌,우)
     */
    const temp = Array.from({length:len});
    const dfs = (idx, cx, cy) => {
        if (idx === len) {
            answer.add(temp.join(''));
            return;
        }

        for (const [dx, dy] of [[1,0], [0,1], [-1,0], [0,-1]]) {
            const nx = cx + dx;
            const ny = cy + dy;
            if (nx < n && nx >= 0 && ny < n && ny >= 0) {
                temp[idx] = arr[nx][ny];
                dfs(idx+1, nx, ny)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dfs(0, i, j);
        }
    }

    return answer.size;
}

console.log(solve(input));
