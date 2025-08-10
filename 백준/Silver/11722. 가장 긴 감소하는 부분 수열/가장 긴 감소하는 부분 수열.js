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
    let n = sc.getInt();
    const arr = [];
    let idx = n;
    while (idx) {
        const v = sc.getInt();
        arr.push(v);
        idx--;
    }

    const dp = Array.from({length:n}, () => 1)
    for (let i = 1; i < n; i++) {
        const v = arr[i];

        for (let j = i-1; j >= 0; j--) {
            if (v < arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

console.log(solve());