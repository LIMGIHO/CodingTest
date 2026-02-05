const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const [N, P] = input[0].split(' ').map(Number);
    const set = new Set();

    let num = N;
    while (!set.has(num)) {
        set.add(num);

        let newNum = 0;
        for (const n of String(num).split('')) {
            newNum += Number(n) ** P;
        }
        num = newNum;
        
    }
    
    return [...set].indexOf(num);
}

console.log(solve(input));