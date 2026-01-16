const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim() //.split('\s+');

const solve = (input) => {
    const pattern = /(<[^>]+>)/g;
    const S = input.split(pattern).filter(Boolean);
    const answer = [];
    S.forEach(str => {
        let data = [];
        if (str[0] !== '<') {
            str.split(/(\s)/).forEach(child => {
                data.push(child.split('').reverse().join(''));
            });            
        } else
            data.push(str);

            
        answer.push(data.join(''));
    });

    return answer.join('');
}

console.log(solve(input));