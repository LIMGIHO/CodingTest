readline/fs 모듈을 쓰지 않고 저수준 입출력을 해 봐도,

프로세스 초기화 시점에 V8이 잡아먹는 메모리를 피할 수 없기 때문에,

배열을 하나도 안 써도 런타임만으로 메모리 초과가 나는 구조임. 푼 코드만 남겨봄

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);
let idx = 0;

const N = input[idx++];
const arr = [0];
for (let i = 0; i < N; i++) {
  arr.push(input[idx++]);
}

// 양방향 링크드 리스트를 배열로 구현
const left = new Array(N + 1);
const right = new Array(N + 1);
for (let i = 1; i <= N; i++) {
  left[i] = i - 1 < 1 ? N : i - 1;
  right[i] = i + 1 > N ? 1 : i + 1;
}

const result = [];
let curr = 1;

for (let count = 0; count < N; count++) {
  result.push(curr);
  const step = arr[curr];

  // 링크드 리스트에서 curr 제거
  right[left[curr]] = right[curr];
  left[right[curr]] = left[curr];

  if (count === N - 1) break; // 마지막이면 이동 안 함

  let next;
  if (step > 0) {
    next = right[curr];
    for (let s = 1; s < step; s++) {
      next = right[next];
    }
  } else {
    next = left[curr];
    for (let s = 1; s < -step; s++) {
      next = left[next];
    }
  }
  curr = next;
}

// 결과 출력
console.log(result.join(' '));
