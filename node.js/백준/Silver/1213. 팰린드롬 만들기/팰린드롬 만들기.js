const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
const letters = input[0].split("");

// 1. 문자 등장 횟수 세기
const freq = {};
for (const char of letters) {
  freq[char] = (freq[char] || 0) + 1;
}

// 2. 홀수 개수 문자 체크
let oddCount = 0;
let oddChar = "";
for (const char in freq) {
  if (freq[char] % 2 === 1) {
    oddCount++;
    oddChar = char;
    // 홀수가 2개 이상이면 바로 종료
    if (oddCount > 1) break;
  }
}

// 3. 팰린드롬 구성 가능 여부 확인
if (oddCount > 1) {
  console.log("I'm Sorry Hansoo");
} else {
  // 사전순으로 가장 앞서는 팰린드롬 만들기
  const sortedChars = Object.keys(freq).sort(); // 문자 정렬
  let leftHalf = "";

  // 등장 횟수의 절반만큼 왼쪽 배열
  for (const char of sortedChars) {
    leftHalf += char.repeat(Math.floor(freq[char] / 2));
  }

  // 오른쪽(거울 위치)은 왼쪽을 뒤집은 것
  const rightHalf = leftHalf.split("").reverse().join("");
  
  // 홀수가 하나 있으면 가운데에 oddChar 추가
  const answer = oddCount === 1
    ? leftHalf + oddChar + rightHalf
    : leftHalf + rightHalf;

  console.log(answer);
}