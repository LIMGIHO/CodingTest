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
    const graph = Array.from({length:n+1}, () => []);
    for (let i = 0; i < n-1; i++) {
        const a = sc.getInt();
        const b = sc.getInt();
        graph[a].push(b);
        graph[b].push(a);
    }

    const children = Array.from({length:n+1}, () => 0);
    const que = [[1, graph[1]]];

    while (que.length) {
        const [parent, nodes] = que.shift();
        for (const node of nodes) {
            if (children[node] !== 0) continue;
            children[node] = parent;
            que.push([node, graph[node]]);
        }
    }

    return children.slice(2).join('\n');
}

console.log(solve());