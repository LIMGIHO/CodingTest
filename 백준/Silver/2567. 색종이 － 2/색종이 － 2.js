const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = input[0].split(' ').map(Number);
    const paper = Array.from({length:101}, () => Array(101));

    let answer = 0;
    let dup = 0;
    for (let i = 1; i <= N; i++) {
        const [x,y] = input[i].split(' ').map(Number);

        for (let j = x; j < x+10; j++) {
            for (let k = y; k < y+10; k++) {
                paper[j][k] = 1;
            }
        }
    }

    for (let j = 1; j < 101; j++) {
        for (let k = 1; k < 101; k++) {
            if (paper[j][k] === 1) {
                if (!paper[j-1][k]) answer++;
                if (!paper[j+1][k]) answer++;
                if (!paper[j][k-1]) answer++;
                if (!paper[j][k+1]) answer++;                    
            }
        }
    }
    return answer;
}

console.log(solve(input));
