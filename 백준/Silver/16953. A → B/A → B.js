const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [a,b] = input[0].split(' ').map(Number);
    
    const que = [[a,1]];
    while (que.length) {
        const [val, count] = que.shift();
        if (val === b) {
            return count;
        }

        if (Number(String(val)+'1') <= b) que.push([Number(String(val)+'1'), count+1]);
        if (val*2 <= b) que.push([val*2, count+1]);
        // console.log(que)
    }
    
    return -1;
}

console.log(solve(input));