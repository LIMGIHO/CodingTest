const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    if (N === 0) return '0';
    
    const books = input[1].split(' ').map(Number);

    let curWeight = 0;
    let boxCnt = 1;
    for (let i = N - 1; i >= 0; i--) {
        const bookWeight = books[i];
        if (curWeight + bookWeight > M) {
            boxCnt++;
            curWeight = bookWeight;
        } else 
            curWeight += bookWeight;
    }

    return boxCnt;
}

console.log(solve(input));
