const fs = require('fs');
// const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';

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

const solve = (input) => {
    // const [n, m] = input[0].split(' ').map(Number);
    // const maze = input.splice(1).map(m => m.split(' ').map(Number));

    const sc = new Scanner();
    const n = sc.getInt();
    const m = sc.getInt();

    const dp = Array.from({length:n+1}, () => Array(m+1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + sc.getInt()//maze[i-1][j-1];
        }
    }
    return dp[n][m];
}

console.log(solve(input));