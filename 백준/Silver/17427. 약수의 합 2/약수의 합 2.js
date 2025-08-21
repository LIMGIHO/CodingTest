const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const n = Number(input[0]);
	const answer = Array.from({length: n + 1}, () => 1);

	answer[0] = 0;
	for (let i = 2; i <= n; i++) {
		let idx = i;
		while(idx <= n) {
			answer[idx] += i;
			idx += i;
		}
	}

	return answer.reduce((acc, v) => acc + v, 0);
}

console.log(solve(input));