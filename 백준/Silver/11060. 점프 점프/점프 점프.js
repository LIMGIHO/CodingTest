const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const n = Number(input[0]);
	const arr = input[1].split(' ').map(Number);

	if (n === 1 && arr[0] > 0) return 1;
	
	let answer = -1;
	const visited = Array.from({length:n}, () => false);
	const que = [[0, arr[0], 0]];
	visited[0] = true;
	while (que.length) {
		const [cur, move, cnt] = que.shift();
		if (cur >= n - 1) return cnt;
		
		for (let i = 1; i <= move; i++) {
			const next = cur + i
			if (visited[next]) continue;
			if (arr[next] === 0) continue;

			visited[next] = true;
			que.push([next, arr[next], cnt+1]);
		}
	}

	return answer;
}

console.log(solve(input));
