const fs = require('fs');
// const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
// const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const input = new Uint8Array(fs.fstatSync(0).size);
fs.readSync(0, input);

function Scanner() {
	this.idx = 0;

	this.getInt = () => {
		let n = 0;
		while (!(input[this.idx] & 0x10)) ++this.idx;
		while (input[this.idx] & 0x10) {
			n = n * 10 + (input[this.idx] & 0x0f);
			++this.idx;
		}
		return n;
	};

    this.getString = () => {
		while (this.idx < input.length && input[this.idx] <= 32) ++this.idx; // 공백 skip
		if (this.idx >= input.length) return '';
		const start = this.idx;
		while (this.idx < input.length && input[this.idx] > 32) ++this.idx;  // 토큰
		return Buffer.from(input.subarray(start, this.idx)).toString();
	};
}

const solve = () => {
    const sc = new Scanner();
    let n = sc.getInt();
    let arr = [];
	let max = 0
    for (let i = 0; i < n; i++) {
		const num = sc.getInt();
        arr.push(num);
		max = Math.max(max, num);
    }

	
	const answer = [];
	const dp = Array.from({length:max + 1}, () => 0);
	dp[1] = 1;
	dp[2] = 2;
	dp[3] = 4;

	for (let i = 4; i <= max; i++) {
		dp[i] =  (dp[i-3] + dp[i-2] + dp[i-1]) % 1_000_000_009;
	}

	for (const num of arr) {
		answer.push(dp[num]);
	}

    return answer.join('\n');
}

console.log(solve());