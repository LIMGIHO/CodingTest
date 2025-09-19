const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const n = Number(input[0]);

	if (n === 0) return 0;
	if (n === 1) return 0;

	const dp = Array.from({length:n+1});
	dp[0] = 0n;
	dp[1] = 1n;

	for (let i = 2n; i <= BigInt(n); i++) {
		dp[i] = dp[i-1n] * i;
	}

	let answer = 0;
	let str = dp[n].toString();
	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] !== '0') return answer;

		answer++;
	}
	return answer;
}

console.log(solve(input));
