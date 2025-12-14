
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const tok = fs.readFileSync(inputPath, 'utf8').trim().split(/\s+/);

let p = 0;

let N = +tok[p++];
let M = +tok[p++];
let K = +tok[p++];
const passage = new Uint8Array(N * M);

for (; p < (K*2)+3;) {
	const r = +tok[p++];
	const c = +tok[p++];

	passage[(r-1)*M + c-1] = 1;
}

const getConvertedPoint = (i,j) => {
	const converted = i*M + j;
	return converted;
}

const getCount = (row, col) => {
	let count = 0;
	let head = 0;
	const que = [[row,col]];

	while (head < que.length) {
		const [r, c] = que[head++];
		const idx = getConvertedPoint(r,c);
		if (idx < 0 || idx >= N*M || !passage[idx]) continue;

		if (passage[idx] > 0) {
			count++;
			passage[idx] = 0;
		}

		if (r-1 >= 0) que.push([r-1, c]);
		if (c+1 < M) que.push([r, c+1]);
		if (r+1 < N) que.push([r+1, c]);
		if (c-1 >= 0) que.push([r, c-1]);
	}

	return count;
}

let answer = 0;
for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (!passage[getConvertedPoint(i,j)]) continue;

		const size = getCount(i, j);
		if (answer < size)
			answer = size;
	}
}

console.log(answer);