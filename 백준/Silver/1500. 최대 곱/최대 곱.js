const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const [S, K] = input[0].split(' ').map(Number);
	const q = Math.floor(S / K), r = S % K;
	let answer = 1;
	for (let i = 0; i < r; i++) answer *= (q + 1);
	for (let i = r; i < K; i++) answer *= q;
	
	return answer;
}

console.log(solve(input));
