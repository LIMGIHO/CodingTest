const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const [r, c] = input[0].split(' ').map(Number);
	const horizonWords = input.slice(1);
	let verticalWords = [];
	for (let i = 0; i < c; i++) {
		let word = '';
		for (let j = 0; j < r; j++) {
			word += horizonWords[j][i]
		}

		verticalWords.push(word);
	}

	const answer = [];
	for (let i = 0; i < r; i++) {
		const word = horizonWords[i].split('#').filter(w => w.length > 1);
		if (word.length)
			answer.push(...word.flat());
	}

	for (let i = 0; i < c; i++) {
		const word = verticalWords[i].split('#').filter(w => w.length > 1);
		if (word.length)
			answer.push(...word.flat());
	}
	
	return answer.sort()[0];
}

console.log(solve(input));
