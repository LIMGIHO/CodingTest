const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 개선된 코드
function solve(input) {
    let answer = [0,0];
    const n = Number(input[0]);
    const papers = input.slice(1).map(p => p.split(' ').map(Number));

    //1. papers 를 4등분해서 각 등분이 같은 색인지 체크
    //2. 같으면 answer[paper색] 증가
    //3. 다르면 등분을 다시 4등분하여 체크
    //4. 재귀로 반복

    const isOneColor = (r, c, n) => {
        let firstColor = papers[r][c];

        // console.log('============',r,c,n)
        for (let row = r; row < r+n; row++) {
            for (let col = c; col < c+n; col++) {
                if (papers[row][col] !== firstColor) return false;
            }
        }

        answer[papers[r][c]]++;
        return true;
    }

    if (isOneColor(0, 0, n)) {
        return answer.join('\n');
    }

    const cutPaper = (r, c, n) => {
        const paperCount = n/2
        for (let row = r; row < r+n; row+=paperCount) {
            for (let col = c; col < c+n; col+=paperCount) {
                if (!isOneColor(row, col, paperCount)) {
                    cutPaper(row, col, paperCount);
                }
            }
        }
    }

    cutPaper(0,0,n);

    return answer.join('\n');
}

console.log(solve(input));


