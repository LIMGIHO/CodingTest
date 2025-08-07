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
    const arr = [];

    let i = 0
    while (true) {
        i++;
        arr.push(sc.getInt());
        if (i === n) break;
    }

    const dp = Array.from({length:n}, () => 0);
    for (let i = 0; i < n; i++) {
        dp[i] = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + arr[i]);
            } 
        }
    }
    // console.log(dp);
    return Math.max(...dp);
}

console.log(solve());