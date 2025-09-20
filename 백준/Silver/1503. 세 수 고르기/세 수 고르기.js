const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(lines) {
  const [nStr, mStr] = lines[0].trim().split(/\s+/);
  const N = Number(nStr);
  const M = Number(mStr);

  const bannedLine = lines[1] ? lines[1].trim() : '';
  const banned = new Set(
    bannedLine.length ? bannedLine.split(/\s+/).map(Number) : []
  );

  const A = [];
  for (let v = 1; v <= 1001; v++) {
    if (!banned.has(v)) A.push(v);
  }

  function lowerBound(arr, x) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  let best = Infinity;

  outer:
  for (let i = 0; i < A.length; i++) {
    const a = A[i];

    {
      const a3 = a * a * a;
      if (a3 > N && a3 - N >= best) break;
    }

    for (let j = i; j < A.length; j++) {
      const b = A[j];

      {
        const minHere = a * b * b;
        if (minHere > N && minHere - N >= best) break;
      }

      const ab = a * b;
      if (ab === 0) continue;

      const target = Math.max(b, Math.round(N / ab));

      let idx = lowerBound(A, target);

      const candIdx = [];
      for (const k of [idx - 1, idx, idx + 1]) {
        if (k >= j && k < A.length) candIdx.push(k);
      }

      for (const k of candIdx) {
        const c = A[k];
        const val = ab * c;
        const diff = Math.abs(N - val);
        if (diff < best) {
          best = diff;
          if (best === 0) break outer;
        }
      }
    }
  }

  return String(best);
}

console.log(solve(input));