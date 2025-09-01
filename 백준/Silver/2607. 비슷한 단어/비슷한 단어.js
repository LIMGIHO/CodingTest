const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const solve = (input) => {
  const n = Number(input[0]);
  const words = input.slice(1);

  // 글자수 카운트
  const toCount = (s) => {
    const m = {};
    for (const ch of s) m[ch] = (m[ch] || 0) + 1;
    return m;
  };

  const first = toCount(words[0]);
  let answer = 0;

  for (let i = 1; i < n; i++) {
    const cur = toCount(words[i]);

    // diff = cur - first
    const diff = { ...cur };
    for (const [k, v] of Object.entries(first)) {
      diff[k] = (diff[k] || 0) - v;   // ✅ v만큼 빼기
    }

    // 판정: plus ≤ 1 and minus ≤ 1
    let plus = 0, minus = 0;
    for (const v of Object.values(diff)) {
      if (v > 0) plus += v; else minus += -v;
      if (plus > 1 || minus > 1) break; // 가지치기
    }

    if (plus <= 1 && minus <= 1) answer++;
  }

  return answer;
};

console.log(solve(input));
