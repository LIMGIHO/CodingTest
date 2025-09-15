const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const nums = input.map(Number);
	const max = Math.max(...nums);
	const dp = Array.from({length:251}, () => 0n);

	dp[0] = 1n;
	dp[1] = 1n;
	dp[2] = 3n;

	const answer = [];
	for (let i = 3; i <= max; i++) {
		dp[i] = dp[i-1] + 2n*dp[i-2];
	}

	for (const idx of nums) answer.push(dp[idx]);

	return answer.join('\n');
}

console.log(solve(input));
