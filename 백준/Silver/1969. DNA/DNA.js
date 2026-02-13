const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const [N,M] = input[0].split(' ').map(Number);
    const S = Array(M)
    const DNAs = input.slice(1).sort();

    for (let i = 0; i < M; i++) {
        const map = new Map();
        for (let j = 0; j < N; j++) {
            const chr = DNAs[j][i];
            if (!map.has(chr))
                map.set(chr,1);
            else
                map.set(chr, map.get(chr) + 1);
        }

        const sortedArr = [...map].sort((a,b) => {
            if (a[1] !== b[1]) return b[1] - a[1];
            if (a[1] === b[1]) {
                if (a[0] > b[0]) return 1;
            }

            return -1;
        });

        S[i] = sortedArr[0][0];
    }

    const answer = [S.join(''), 0];
    for (let i = 0; i < N; i++) {
        let diff = 0;
        for (let j = 0; j < M; j++) {
            if (S[j] !== DNAs[i][j]) diff++;
        }

        answer[1] += diff;
    }
    
    return answer.join('\n');
}

console.log(solve(input));
