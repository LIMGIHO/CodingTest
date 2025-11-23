const { count } = require('console');
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    let count = 0;

    const A = [], B = [];
    for (let i = 1; i <= N; i++) {
        const a = input[i].split('').map(Number);
        const b = input[i + N].split('').map(Number);
        A.push(a);
        B.push(b);
    }

    const checkSame = () => {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (A[i][j] !== B[i][j]) return false
            }
        }

        return true
    }

    const setToggle = (matrix, x, y) => {
        // console.log("toggle", matrix, x, y)
        for (let i = x; i < x + 3; i++) {
            for (let j = y; j < y + 3; j++) {
                matrix[i][j] = matrix[i][j] === 1 ? 0 : 1;
            }
        }
    }

    if (N < 3) {
        if (checkSame()) return 0;
        else return -1;
    }

    for (let i = 0; i <= N - 3; i++) {
        for (let j = 0; j <= M - 3; j++) {
            if (A[i][j] !== B[i][j]) {
                count++;
                setToggle(A, i, j);
            }
        }
    }

    if (checkSame()) return count;
    else return -1;
}

console.log(solve(input));
