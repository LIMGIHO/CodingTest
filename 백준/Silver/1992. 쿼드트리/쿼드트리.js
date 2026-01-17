const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const originVideo = input.slice(1).map(v => v.split('').map(Number));
    const base = Math.log2(N);
    let merged = 0;

    if (N === 1) return originVideo[0][0];

    /**
     * 1. log2(N)만큼 2x2 압축을 반복
     * 2. 압축한 2x2를 한 칸으로 변경 후 새로운 zip 생성
     */

    const doZip = (zip, base) => {
        const cnt = Math.pow(2,base);
        const newZip = Array.from({length:cnt}, () => Array(cnt));
        for (let i = 0; i < cnt*2; i+=2) {
            for (let j = 0; j < cnt*2; j+=2) {
                const row = Math.floor(i / 2);
                const col = Math.floor(j / 2);

                const a = zip[i][j];
                const b = zip[i][j+1];
                const c = zip[i+1][j];
                const d = zip[i+1][j+1];

                if (!isNaN(a) && a === b && b === c && c === d) 
                    newZip[row][col] = a;
                else
                    newZip[row][col] = `(${a}${b}${c}${d})`
            }
        }

        return newZip;
    }

    let zip = originVideo;
    for (let i = base - 1; i >= 0; i--) {
        zip = doZip(zip, i);

        // console.log("=====i:", i, zip)
        if (i === 0) {
            answer = zip[0][0];
            break;
        }
    }

    return answer;
}

console.log(solve(input));
