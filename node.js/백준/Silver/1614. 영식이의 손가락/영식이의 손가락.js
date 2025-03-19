const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

const injuredFinger = parseInt(input[0].trim());
const allowed = parseInt(input[1].trim());

// 왼손 손가락 순서는 엄지(1), 검지(2), 중지(3), 약지(4), 새끼(5)
// 그 후에는 반대로: 약지(4), 중지(3), 검지(2)
// 따라서 전체 패턴은:
const pattern = [1, 2, 3, 4, 5, 4, 3, 2];

// prefix 배열: prefix[i]는 패턴의 처음 i개를 봤을 때 injuredFinger가 나온 횟수
const prefix = new Array(9).fill(0);
for (let i = 0; i < 8; i++) {
  prefix[i + 1] = prefix[i] + (pattern[i] === injuredFinger ? 1 : 0);
}

// 한 사이클(8회) 동안 injuredFinger가 몇 번 쓰이는지
const cycleOccurrence = prefix[8];

// 전체 사이클을 몇 번 완전히 셀 수 있는지 계산
const fullCycles = cycleOccurrence > 0 ? Math.floor(allowed / cycleOccurrence) : 0;
const baseCount = fullCycles * 8;

// 남은 허용 횟수
const remaining = allowed - fullCycles * cycleOccurrence;

// 다음 사이클에서 몇 번 더 셀 수 있는지 확인 (손가락이 추가로 쓰이지 않는 범위)
let extra = 0;
for (let r = 0; r <= 8; r++) {
  if (prefix[r] <= remaining) {
    extra = r;
  } else {
    break;
  }
}

const answer = baseCount + extra;
console.log(answer);