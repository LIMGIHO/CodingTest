const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const K = Number(input[0]);
    const answer = [];

    for (let i = 1; i <= K; i++) {
        const scores = input[i].split(' ').map(Number);
        const N = scores.shift();
        scores.sort((a,b) => b-a);

        let max = 0;
        for (let j = 0; j < scores.length - 1; j++) {
            if (max < scores[j] - scores[j+1])
                max = scores[j] - scores[j+1];
        }
        
        answer.push(`Class ${i}`);
        answer.push(`Max ${scores[0]}, Min ${scores[scores.length-1]}, Largest gap ${max}`)
    }

    return answer.join('\n');
}

console.log(solve(input));