const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const tok = fs.readFileSync(inputPath, 'utf8').trim().split(/\s+/);

let p = 0;

let N = +tok[p++];
const line = Array(N);
while (p <= N) line[p-1] = +tok[p++];

const complete = [0];
const stack = [];
let idx = 0;
while (idx < N || stack.length > 0) {
	if (complete[complete.length - 1] + 1 === line[idx]) {
		complete.push(line[idx]);
		idx++;
		continue;
	}

	if (complete[complete.length - 1] + 1 === stack[stack.length-1]) {
		complete.push(stack.pop());
		continue;	
	} else if (idx >= N) break;

	stack.push(line[idx++]);
}


const answer = complete.length === N + 1 ? 'Nice' : 'Sad';
console.log(answer);