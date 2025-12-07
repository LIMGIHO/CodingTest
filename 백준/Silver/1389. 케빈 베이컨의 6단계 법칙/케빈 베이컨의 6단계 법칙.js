
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const tok = fs.readFileSync(inputPath, 'utf8').trim().split(/\s+/);

let p = 0;

/**
 * 1. graph : 경로 저장(양방향)
 * 2. dp : 각 위치별 다음 단계 이동 횟수 저장(2차원 배열)
 * 2. summary : 각 위치별 다음 단계 이동 횟수 저장(1차원 배열)
 * 3. summary
 */

const N = +tok[p++];
const M = +tok[p++];
const graph = Array.from({length:N+1}, () => []);
for (let i = 0; i < M; i++){
	const a = +tok[p++];
	const b = +tok[p++];
	
	if (!graph[a]) graph[a] = [];
	if (!graph[b]) graph[b] = [];
	
	graph[a].push(b);
	graph[b].push(a);
	
}

const distance = new Int16Array(N+1);
let min = [0,Infinity];
for (let i = 1; i <= N; i++) {
	let sum = 0;
	let idx = 0;
	const que = [i];
	distance.fill(-1);
	distance[i] = 0;

	while (idx < que.length) {
		const current = que[idx++];

		for (const next of graph[current]) {
			if (distance[next] !== -1) continue;

			distance[next] = distance[current] + 1;
			sum+=distance[next];
			que.push(next);
		}
	}
	
	if (min[1] > sum) {
		min[0] = i;
		min[1] = sum
	}
}

console.log(min[0])

