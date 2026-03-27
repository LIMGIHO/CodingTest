const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    let arr = input[0].split(' ').map(Number);
    const point = arr.concat(arr);

    const slopeMulti = (x1,y1,x2,y2) => {
        return (y2-y1) * (x2-x1);
    }

    const rectangle = (x1,y1,x2,y2,x3,y3,x4,y4) => {
        let sum = 0

        sum += Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        sum += Math.sqrt((x2 - x4) ** 2 + (y2 - y4) ** 2);
        sum += Math.sqrt((x4 - x3) ** 2 + (y4 - y3) ** 2);
        sum += Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);

        return sum;
    }

    const tmp = [];
    for (let i = 0; i < 3; i++) {
        const idx = i * 2;
        const [x1,y1] = point.slice(idx,idx+2);
        const [x2,y2,x3,y3] = point.slice(idx+2, idx+6);

        if ((x2 - x1) * (y3 - y1) === (y2 - y1) * (x3 - x1)) {
            continue;
        }

        const x4 = x1 + (x2 - x1) + (x3 - x1);
        const y4 = y1 + (y2 - y1) + (y3 - y1);

        if (x1 === x2 && x2 === x3 && x3 === x4) continue;
        if (y1 === y2 && y2 === y3 && y3 === y4) continue;

        const s1 = slopeMulti(x1,y1,x2,y2);
        const s2 = slopeMulti(x3,y3,x4,y4);
        const s3 = slopeMulti(x1,y1,x3,y3);
        const s4 = slopeMulti(x2,y2,x4,y4);

        if (s1 === s2 && s3 === s4) {
            const sum = rectangle(x1,y1,x2,y2,x3,y3,x4,y4);

            // console.log(x4,y4, sum);
            tmp.push(sum)
        }
        
    }
    tmp.sort((a,b) => a-b);
    let answer = tmp.length === 0 ? -1
        : tmp[tmp.length-1] - tmp[0]; 

    return Number.isInteger(answer) ? `${answer}.0` : String(answer);
}

console.log(solve(input));
