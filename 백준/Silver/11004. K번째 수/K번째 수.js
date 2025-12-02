const fs = require('fs');
const buf = fs.readFileSync(0);
let idx = 0, L = buf.length;

function readInt() {
  while (idx < L && buf[idx] <= 32) idx++;
  let sgn = 1;
  if (idx < L && buf[idx] === 45) { sgn = -1; idx++; }
  let x = 0;
  while (idx < L) {
    const c = buf[idx];
    if (c < 48 || c > 57) break;
    x = x * 10 + (c - 48);
    idx++;
  }
  return x * sgn;
}

const N = readInt();
const K = readInt();
const A = new Int32Array(N);
for (let i = 0; i < N; i++) A[i] = readInt();
const k = K - 1;

function swap(a, i, j) { const t = a[i]; a[i] = a[j]; a[j] = t; }
function insertion(a, l, r) {
  for (let i = l + 1; i <= r; i++) {
    const x = a[i];
    let j = i - 1;
    while (j >= l && a[j] > x) { a[j + 1] = a[j]; j--; }
    a[j + 1] = x;
  }
}
function medianOf3(a, i, j, k) {
  if (a[i] > a[j]) swap(a, i, j);
  if (a[j] > a[k]) swap(a, j, k);
  if (a[i] > a[j]) swap(a, i, j);
  return j;
}

function kthSmallWithMaxHeap(a, k) {
  const size = k + 1;
  const heap = new Int32Array(size);
  for (let i = 0; i < size; i++) heap[i] = a[i];

  for (let i = (size >> 1) - 1; i >= 0; i--) {
    let p = i;
    for (;;) {
      let l = (p << 1) + 1, r = l + 1, m = p;
      if (l < size && heap[l] > heap[m]) m = l;
      if (r < size && heap[r] > heap[m]) m = r;
      if (m === p) break;
      const t = heap[m]; heap[m] = heap[p]; heap[p] = t; p = m;
    }
  }
  for (let i = size; i < a.length; i++) {
    if (a[i] < heap[0]) {
      heap[0] = a[i];
      // siftDown
      let p = 0;
      for (;;) {
        let l = (p << 1) + 1, r = l + 1, m = p;
        if (l < size && heap[l] > heap[m]) m = l;
        if (r < size && heap[r] > heap[m]) m = r;
        if (m === p) break;
        const t = heap[m]; heap[m] = heap[p]; heap[p] = t; p = m;
      }
    }
  }
  return heap[0];
}

function kthLargeWithMinHeap(a, t) { 
  const size = t + 1;
  const heap = new Int32Array(size);
  for (let i = 0; i < size; i++) heap[i] = a[i];

  for (let i = (size >> 1) - 1; i >= 0; i--) {
    let p = i;
    for (;;) {
      let l = (p << 1) + 1, r = l + 1, m = p;
      if (l < size && heap[l] < heap[m]) m = l;
      if (r < size && heap[r] < heap[m]) m = r;
      if (m === p) break;
      const t2 = heap[m]; heap[m] = heap[p]; heap[p] = t2; p = m;
    }
  }
  for (let i = size; i < a.length; i++) {
    if (a[i] > heap[0]) {
      heap[0] = a[i];
      let p = 0;
      for (;;) {
        let l = (p << 1) + 1, r = l + 1, m = p;
        if (l < size && heap[l] < heap[m]) m = l;
        if (r < size && heap[r] < heap[m]) m = r;
        if (m === p) break;
        const t2 = heap[m]; heap[m] = heap[p]; heap[p] = t2; p = m;
      }
    }
  }
  return heap[0];
}

function introSelect(a, k) {
  let l = 0, r = a.length - 1;
  // 깊이 한계 ~ 2*log2(n)
  let depth = 0, n = a.length; while (n > 1) { n >>= 1; depth++; }
  let limit = depth << 1;

  while (true) {
    if (r - l <= 64) { insertion(a, l, r); return a[k]; }
    if (limit-- <= 0) {
      const len = r - l + 1;
      const tmp = new Int32Array(len);
      for (let i = 0; i < len; i++) tmp[i] = a[l + i];
      return kthSmallWithMaxHeap(tmp, k - l);
    }

    const m = (l + r) >> 1;
    const pi = medianOf3(a, l, m, r);
    const pv = a[pi];

    let i = l, lt = l, gt = r;
    while (i <= gt) {
      const v = a[i];
      if (v < pv) { swap(a, lt, i); lt++; i++; }
      else if (v > pv) { swap(a, i, gt); gt--; }
      else { i++; }
    }
    if (k < lt) r = lt - 1;
    else if (k > gt) l = gt + 1;
    else return pv;
  }
}

const leftCost = k + 1;
const rightCost = N - k;
let ans;

if (leftCost <= 200000) {
  ans = kthSmallWithMaxHeap(A, k);
} else if (rightCost <= 200000) {
  // “k번째 작은” == “(N-1-k)번째 큰”
  ans = kthLargeWithMinHeap(A, (N - 1) - k);
} else {
  ans = introSelect(A, k);
}

console.log(ans);
