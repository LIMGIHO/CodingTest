const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const max = Array.from({length:10}, (_,i) => i);
    const min = Array.from({length:10}, (_,i) => 9-i);
    const angles = input[1].split(' ');
    let cur = '';
    let cc; 
    const seq = [];
    for (let i = N-1; i >= 0; i--) {
        if (cur === angles[i])
            cc++;
        else {
            if (cur !== '')
                seq.push(cc);

            cc = 1;
            cur = angles[i];
        } 

        if (i === 0)
            seq.push(cc)
    }
    
    const answer = ['','']
    let i = 0;
    while (seq.length) {
        const sign = angles[i];
        let continousCnt = seq.pop();
        i += continousCnt;

        if (sign === '<') {
            answer[0] += max.splice(max.length - (continousCnt + 1), continousCnt).join('');
            while (continousCnt > 0) {
                answer[1] += min.pop();
                continousCnt--;
            }
        } else {
            answer[1] += min.splice(min.length - (continousCnt+1), continousCnt).join('')
            while (continousCnt > 0) {
                answer[0] += max.pop();
                continousCnt--;
            }
        }
    }

    answer[0] += max.pop();
    answer[1] += min.pop();
    return answer.join('\n');
}

console.log(solve(input));