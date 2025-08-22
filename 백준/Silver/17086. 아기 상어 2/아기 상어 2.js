const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [n,m] = input[0].split(' ');
    const arr = input.slice(1).map(a => a.split(' ').map(Number));

    // 안전공간, 상어공간 좌표 분리 배열 생성
    // 안전공간 배열을 loop 돌면서
    //   1. 현재 x,y 좌표와 상어 좌표 a, b 의 abs(x-a), abs(y-b) 중 큰 값을 안전거리로 설정
    //   2. 현재 좌표의 최소 안전거리를 저장

    const safeZone = [];
    const sharkZone = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] === 0) safeZone.push([i,j]);
            else sharkZone.push([i,j]);
        }
    }

    let answer = 0;
    for (const [x,y] of safeZone) {
        let safetyDistance = Infinity;
        for (const [a,b] of sharkZone) {
            const distance = Math.max(Math.abs(x-a), Math.abs(y-b));
            safetyDistance = Math.min(safetyDistance, distance);
        }

        answer = Math.max(answer, safetyDistance);
    }
    return answer;
}

console.log(solve(input));