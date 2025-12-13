
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const tok = fs.readFileSync(inputPath, 'utf8').trim().split(/\s+/);

let p = 0;

let A = BigInt(tok[p++]);
let B = BigInt(tok[p++]);
let C = BigInt(tok[p++]);

let answer;
if (C === 1n) {
	answer = 0n;
} else {
	A %= C;
	answer = 1n;
	while (B > 0n) {
		if (B & 1n) {
			answer = (answer * A) % C;
		}

		A = (A*A)%C;
		B >>= 1n;
	}
}

console.log(answer.toString());