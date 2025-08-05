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
}

const solve = () => {
    const sc = new Scanner();
    const n = sc.getInt();
    const k = sc.getInt();
    
    if (k === 0 ) return 1;
    if (n === k) return 1;
    
    const dp = [];
    dp[0] = 1n
    dp[1] = 1n;

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i-1] * BigInt(i));
    }
    return ((dp[n] / (dp[k] * dp[n-k])) % 10007n).toString();
}

console.log(solve());