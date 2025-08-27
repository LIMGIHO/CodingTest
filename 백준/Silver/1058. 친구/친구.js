const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const n = Number(input[0]);
	const arr = input.slice(1).map(arr => arr.split(''));

	const graph = Array.from({length: n}, () => []);
	arr.forEach((element,i) => {
		element.forEach((friend,j) => {
			if (friend === 'Y') graph[i].push(j);
		});
	});

	const answer = Array.from({length:n}, () => new Set());
	for (let i = 0; i < n; i++) {
		const arr = graph[i];
		for (let j = 0; j < arr.length; j++) {
			const friend = arr[j];
			answer[i].add(friend);
			const arr2 = graph[friend];
			for (let k = 0; k < arr2.length; k++) {
				answer[i].add(arr2[k]);
			}
		}
	}

	return Math.max(...answer.map(set => set.size === 0 ? 0 : set.size - 1));
}

console.log(solve(input));
