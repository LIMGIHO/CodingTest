const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

function solve(input) {
    const n = Number(input[0]);
    const m = Number(input[2]);
    const requestBudget = input[1].split(' ').map(Number).sort((a, b) => a - b);

    //1. 예산 총합 계산, 예산 최대값, 최소값 계산
    //2. 예산 총합이 m 보다 작으면 예산 중 최대값 출력
    //3. 예산 최소값부터 최대값까지 반복하면서 예산 총합이 m 보다 크면 예산 최대값 출력
    //    - 정렬된 예산을 이분법으로 탐색하면서 배정 예산 값을 찾아서 
    //      이전까지만 더하고 나머지는 배정예산 * 갯수로 모든 루프를 돌지 말기

    const sumBudget = requestBudget.reduce((acc, money) => acc + money, 0);
    const minBudget = requestBudget[0];
    const maxBudget = requestBudget[n - 1];

    if (sumBudget <= m) {
        return maxBudget;
    }

    let start = 0;
    const findBugetIndex = (budget) => {
        let left = start;
        let right = n - 1;

        while (left <= right) {
            const mid = Math.floor((left+right)/2);

            if (requestBudget[mid] <= budget) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }

    let confirmBudget = minBudget;
    for (let budget = 0; budget <= maxBudget; budget++) {
        const idx = findBugetIndex(budget);
        const leftSum = requestBudget.slice(0, idx).reduce((acc, money) => acc + money, 0);
        const rightSum = (budget * (n - idx));

        if (leftSum + rightSum <= m) {
            confirmBudget = budget;
        } else {
            break;
        }
    }

    return confirmBudget;
}

console.log(solve(input));


