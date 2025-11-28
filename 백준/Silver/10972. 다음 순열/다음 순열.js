const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);

    let findIdx = -1;
    for (let i = N - 1; i > 0; i--) {
        if (arr[i] > arr[i-1]) {
            findIdx = i;
            break;
        }
    }

    if (findIdx < 0) return findIdx;

    const front = arr.slice(0, findIdx);
    const back = arr.slice(findIdx);

    for (let i = back.length - 1; i >= 0; i--) {
        if (front[findIdx-1] < back[i]) {
            front[findIdx-1] = back[i];
            back[i] = arr[findIdx-1];
            break;
        }
    }

    return front.join(' ') + ' ' + back.sort((a,b)=>a-b).join(' ')
}

console.log(solve(input));
