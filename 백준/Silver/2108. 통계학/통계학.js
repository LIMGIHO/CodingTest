const fs = require('fs');

// 입력 전체를 읽어서, 줄 단위 배열로 만들기
let inputPath = '/dev/stdin';
// 개발 환경에서는 dev/stdin 파일 사용
if (fs.existsSync('dev/stdin')) {
    inputPath = 'dev/stdin';
}

const input = fs.readFileSync(inputPath)
  .toString()
  .trim()
  .split('\n');

function solve(S) {
    //1. 산술평균
    //2. 중앙값 : 정렬 후 중앙값
    //3. 최빈값 
    //4. 범위 : 최대, 최솟값의 차이
    let n = S[0];
    let arr = [];
    let sum = 0;
    let mid;
    let min = Number.MIN_SAFE_INTEGER;
    let max = Number.MAX_SAFE_INTEGER;
    let diff;
    let map = {};
    let maxCount = 0;
    let maxNum;
    let mapCount = {};

    for (let i = 1; i <= n; i++) {
        const num = Number(S[i]);
        sum += num;
        arr.push(num);
        map[num] = (map[num] || 0) + 1;

        if (map[num] >= maxCount) {
            maxCount = map[num];
            maxNum = num;

            if (!mapCount[maxCount]) mapCount[maxCount] = [];

            mapCount[maxCount].push(num);
        }
    }
    arr.sort((a, b) => a - b);
    mid = arr[Math.floor(n / 2)];
    min = arr[0];
    max = arr[n - 1];
    diff = max - min;

    if (mapCount[maxCount].length > 1) {
        maxNum = mapCount[maxCount].sort((a, b) => a - b)[1];
    } else {
        maxNum = mapCount[maxCount][0];
    }
    
    console.log([Math.round(sum / n, 1), mid, maxNum, diff].join('\n'));
}

solve(input);

