const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [M,N] = input[0].split(' ').map(Number);
    const DIGIT_TO_WORD = {
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
    }

    const sortedByWord = [];
    for (let i = M; i <= N; i++) {
        const letter = [];
        for (const chr of String(i).split('')) {
            letter.push(DIGIT_TO_WORD[chr]);
        }

        sortedByWord.push([letter.join(' '), i]);
    }

    sortedByWord.sort((a,b) => a[0].localeCompare(b[0]));
    const answer = [];
    for (let i = 0; i <= N - M; i++) {
        const idx = Math.floor(i / 10);
        if (!answer[idx]) answer[idx] = [];

        answer[idx].push(sortedByWord[i][1]);
    }

    return answer.map(a => a.join(' ')).join('\n');
}

console.log(solve(input));
