
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const tok = fs.readFileSync(inputPath, 'utf8').trim().split(/\s+/);

let p = 0;

let N = +tok[p++];
const roadDistance = Array(N-1);
const oilPrice = Array(N);
while (p < N) roadDistance[p-1] = BigInt(tok[p++]);
while (p-N < N) oilPrice[p-N] = BigInt(tok[p++]);

let minOilCost = Infinity;
let answer = 0n;
for (let i = 0; i < N; i++) {
	if (minOilCost > oilPrice[i])
		minOilCost = oilPrice[i];

	if (!roadDistance[i]) break;
	answer += minOilCost * roadDistance[i];
}

console.log(answer.toString());