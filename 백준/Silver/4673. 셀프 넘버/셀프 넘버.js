const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const n = 10000;
    const selfNum = Array.from({length:n+1}, () => true);
        
    for (let i = 1; i <= n; i++) {
        let next = i;
        for (const num of String(i).split('')) 
            next += +num;

        selfNum[next] = false;
    }

    const answer = [];
    for (let i = 1; i <= n; i++) {
        if (selfNum[i]) answer.push(i);
    }

    return answer.join('\n');
}

console.log(solve(input));
