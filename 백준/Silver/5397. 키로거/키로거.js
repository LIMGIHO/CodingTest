const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    
    // -: 커서에 앞글자가 존재하면 글자 삭제
    // <: 좌측 화살표
    // >: 우측화살표

    const answer = [];
    const l = input[0];
    const passwords = input.slice(1);

    const getDecrypt = (pw) => {
        let left = [];
        let right = [];

        for (const str of pw.split('')) {
            if (str === '-') {
                if (left.length) left.pop();
            } else if (str === '>') {
                if (right.length) left.push(right.pop());
            } else if (str === '<') {
                if (left.length) right.push(left.pop());
            } else {
                left.push(str);
            }
        }

        return [left.join(''), right.reverse().join('')].join('');
    }

    for (let i = 0; i < l; i++) {
        const pw = passwords[i];

        const decrypt = getDecrypt(pw);
        answer.push(decrypt);
    }
    
    return answer.join('\n');
}

console.log(solve(input));


