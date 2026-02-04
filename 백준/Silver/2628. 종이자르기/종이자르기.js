const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/); //split('\s+');

const solve = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const J = Number(input[1]);
    const cut = input.slice(2).map(c => c.split(' ').map(Number));

    const vertical = cut.filter(c => c[0] === 0).map(c => c[1]).sort((a,b) => b - a);
    const horizon = cut.filter(c => c[0] === 1).map(c => c[1]).sort((a,b) => b - a);
    horizon.push(0); vertical.push(0);
    
    let hMax = 0;
    for (let i = -1; i < horizon.length-1; i++) {
        const a = (i === -1 ? N : horizon[i]);
        const b = horizon[i+1];
        hMax = Math.max(hMax, a - b);
    }

    let vMax = 0
    for (let i = -1; i < vertical.length-1; i++) {
        const a = (i === -1 ? M : vertical[i]);
        const b = vertical[i+1];
        vMax = Math.max(vMax, a - b);
    }

    return hMax * vMax;
}

console.log(solve(input));