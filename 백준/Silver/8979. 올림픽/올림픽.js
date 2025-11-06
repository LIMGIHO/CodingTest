const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N,K] = input[0].split(' ').map(Number);
    const counties = input.slice(1).map(c => c.split(' ').map(Number));
    counties.sort((a,b) => {
        if (a[1] !== b[1]) return b[1] - a[1];
        if (a[2] !== b[2]) return b[2] - a[2];
        if (a[3] !== b[3]) return b[3] - a[3];

        return 0;
    });
    
    let rank = 1;
    for (let i = 0; i < N - 1; i++) {
        const [no, gold, silver, bronze] = counties[i];
        if (no === K) return rank;

        if (counties[i+1][1] !== gold 
        || counties[i+1][2] !== silver 
        || counties[i+1][3] !== bronze)
            rank = rank + ((i+1) - rank) + 1;
    }

    return rank;
}

console.log(solve(input));
