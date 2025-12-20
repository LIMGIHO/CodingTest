
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const tok = fs.readFileSync(inputPath, 'utf8').trim().split(/\s+/);

let p = 0;

let N = +tok[p++];
const board = Array.from({length: N}, () => Array(N));

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		board[i][j] = +tok[p++];
	}	
}

let memo = Array.from({length: N}, () => Array(N).fill(-1n));
const dfs = (row, col) => {
	if (row === N-1 && col === N-1) {
		return 1n;
	}
	if (memo[row][col] !== -1n) return memo[row][col];

	const next = board[row][col];
	if (next === 0) return 0n;


	let way = 0n;
	if (col + next < N) {
		way += dfs(row, col + next);		
	}
	

	if (row + next < N) {
		way += dfs(row + next, col);	
	}
	memo[row][col] = way;
	return way;
}

dfs(0,0);

console.log(dfs(0,0).toString());