const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    let p = 0;
    const T = Number(input[p++]);
    const answer = Array(T).fill(0);
    for (let i = 0; i < T; i++) {
        const N = Number(input[p++]);
        const docOrder = Array(N);

        for (let j = 0; j < N; j++) {
            const [docScore, intvScore] = input[p++].split(' ').map(Number);
            docOrder[j] = [docScore, intvScore];
        }
        docOrder.sort((a,b) => a[0]-b[0]);

        let minIntvScore = Infinity;
        docOrder.forEach(([_, intvScore]) => {
            if (minIntvScore > intvScore) {
                answer[i]++;
                minIntvScore = intvScore;
            }
        });
    };

    return answer.join('\n');
}

console.log(solve(input));