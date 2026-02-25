const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const [H, W] = input[0].split(' ').map(Number);
    const city = input.slice(1).map(c=> c.split(''));

    const answer = [];
    for (let i = 0; i < H; i++) {
        let cloud = -1;
        const come = []
        for (let j = 0; j < W; j++) {
            if (city[i][j] === 'c') cloud = j;
            
            if (cloud === -1) come.push(cloud);
            else come.push(j - cloud);
        }
        answer.push(come.join(' '))
    }

    return answer.join('\n');
}

console.log(solve(input));