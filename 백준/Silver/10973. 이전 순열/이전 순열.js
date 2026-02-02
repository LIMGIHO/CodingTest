const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);

    const answer = [];
    for (let i = N - 1; i > 0; i--) {
        if (arr[i-1] > arr[i]) {
            const tmpArr = arr.slice(i).sort((a,b) => b-a);
            const tmp = arr[i-1];

            for (let j = 0; j < tmpArr.length; j++) {
                if (tmpArr[j] < tmp) {
                    arr[i-1] = tmpArr[j];
                    tmpArr[j]= tmp;
                    break;
                }
            }

            const answer = [];
            for (let j = 0; j < i; j++) {
                answer.push(arr[j]);
            }

            for (let j = 0; j < tmpArr.length; j++) {
                answer.push(tmpArr[j]);
            }          

            return answer.join(' ');
        }
    }

    
    return -1;
}

console.log(solve(input));