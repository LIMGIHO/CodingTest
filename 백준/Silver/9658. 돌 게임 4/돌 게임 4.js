const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const n = Number(input[0]);
	const dp = Array.from({length:n+1}, () => false);
	/**
	 * - true : sk win
	 * - false : cy win
	 */
	dp[0] = null;
	dp[1] = false;
	dp[2] = true;
	dp[4] = true;

	for (let i = 5; i <= n; i++) {
		if (!dp[i-1] || !dp[i-3] || !dp[i-4])
			dp[i] = true;
	}

	return dp[n] ? 'SK': 'CY';
}

console.log(solve(input));