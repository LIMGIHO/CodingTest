
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const tok = fs.readFileSync(inputPath, 'utf8').trim().split(/\s+/);

let p = 0;

let N = +tok[p++];
let M = +tok[p++];
const map = new Map();
while (p <= N*2) {
	if (!map.has(tok[p])) map.set(tok[p], null);
	map.set(tok[p++], tok[p++]);
}

const answer = Array(M);
for (let i = 0; i < M; i++) {
	const pw = map.get(tok[p++]);
	answer[i] = pw;
}

console.log(answer.join('\n'));