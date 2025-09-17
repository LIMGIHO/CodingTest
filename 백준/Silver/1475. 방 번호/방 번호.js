const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const No = input[0].split('').map(Number);
	const count = Array.from({length:11},  () => 0);

	let answer = 0;
	for (const no of No) {
		count[no]++;
		if (no === 6 || no === 9) {
			answer = Math.max(Math.ceil((count[6] + count[9]) / 2), answer);
		} else {
			answer = Math.max(count[no], answer);
		}
	}

	return answer;
}

console.log(solve(input));
