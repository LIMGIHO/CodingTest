const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(" ");

let word = arr[0];
let answer = "";

let smallest = null;

// 가능한 모든 두 지점 선택 (i, j)
for (let i = 1; i < word.length - 1; i++) {
  for (let j = i + 1; j < word.length; j++) {
    // 세 부분으로 분할
    const part1 = word.slice(0, i);
    const part2 = word.slice(i, j);
    const part3 = word.slice(j);

    // 각 부분을 뒤집기
    const rev1 = part1.split('').reverse().join('');
    const rev2 = part2.split('').reverse().join('');
    const rev3 = part3.split('').reverse().join('');

    // 합치기
    const candidate = rev1 + rev2 + rev3;

    // 사전순으로 비교하여 가장 작은 값 갱신
    if (smallest === null || candidate < smallest) {
      smallest = candidate;
    }
  }
}

console.log(smallest);