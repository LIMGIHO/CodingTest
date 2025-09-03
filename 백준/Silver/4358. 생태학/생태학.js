const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	if (!input.length) return '';

    const trees = {};
	let total = 0;
	for (const tree of input) {
		if (!tree) continue;
		if (!trees[tree]) trees[tree] = 0;

		trees[tree]++;
		total++;
	}

	const sorted = Object.keys(trees)
					.sort()
					.map(tree => tree + ' ' + ((trees[tree]) / total * 100).toFixed(4));
	
	return sorted.join('\n');
}

console.log(solve(input));
