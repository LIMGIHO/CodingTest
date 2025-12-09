const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const cards = input.slice(1).map(BigInt);
    const map = new Map();

    const max = [null,0];
    for (let i = 0; i < N; i++) {
        let count = map.get(cards[i]) || 0;
        map.set(cards[i], ++count);
        
        if (max[1] < count){
            max[0] = new Set([cards[i]]);
            max[1] = count;
        } else if (max[1] === count) {
            max[0].add(cards[i])
        }
    }

    return Array.from(max[0]).sort((a,b) => a<b ? -1 : a>b?1:0)[0].toString();
}

console.log(solve(input));