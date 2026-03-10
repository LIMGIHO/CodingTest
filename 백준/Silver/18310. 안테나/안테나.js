const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    
    const houses = [];
    const cntLeftRight = [0,0];
    let distance = 0;
    for (const val of input[1].split(' ')) {
        const loc = Number(val);
        houses[loc] = (houses[loc] || 0) + 1;

        if (loc > 0)
            cntLeftRight[1]++;

        distance += (loc);
    }

    let max = distance;
    let answer = 0;
    for (let i = 1; i < houses.length; i++) {
        
        if (houses[i-1]) cntLeftRight[0] += houses[i-1];

        distance = distance + cntLeftRight[0] - cntLeftRight[1];
        if (max > distance) {
            max = distance
            answer = i
        }

        if (houses[i]) cntLeftRight[1] -= houses[i];
    }

    return answer;
}

console.log(solve(input));