const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    let cnt = N;
    const star = '*';
    if (N === 1) return star;
    let answer = [];
    
    while (cnt > 1) {
        let M = (cnt * 2) - 1 + (cnt * 2) - 2;
        answer.push();
        
        let diff = N - cnt;
        let str1 = (star + ' ').repeat(diff) + star.repeat(M) + (' ' + star).repeat(diff)
        
        cnt--; 
        diff = N - cnt;
        let str2 = (star + ' ').repeat(diff) + ' '.repeat(M - 4) + (' ' + star).repeat(diff);

        answer.push(str1);
        answer.push(str2);
    }

    let M = (N * 2) - 1 + (N * 2) - 2;
    let str = [];
    for (let i = 0; i < M; i++) {
        if (i % 2 === 0)
            str.push(star);
        else str.push(' ');
    }

    answer.push(str.join(''));
    let len = answer.length - 2;
    for (let i = len; i >= 0; i--) {
        answer.push(answer[i]);
    }

    return answer.join('\n')
}

console.log(solve(input));