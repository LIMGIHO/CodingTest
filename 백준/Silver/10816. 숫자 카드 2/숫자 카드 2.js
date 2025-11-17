const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
	const myNumb = input[1].split(' ').reduce((acc, n) => {
        acc[n] = (acc[n] || 0) + 1;
        return acc;
    }, {});
    const M = Number(input[2]);
    const Numbers = input[3].split(' ').map(Number);

    const answer = [];
    for (const n of Numbers) {
        answer.push(myNumb[n] || 0);
    }
    return answer.join(' ');
}

console.log(solve(input));