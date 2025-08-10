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
    let m = sc.getInt();

    const graph = Array.from({length:n+1}, () => []);
    for (let i = 0; i < m; i++) {
        const a = sc.getInt();
        const b = sc.getInt();
        graph[a].push(b);
        graph[b].push(a);
    }
    
    let answer = 0;
    const visited = Array.from({length:n+1}, () => false);
    
    const dfs = (arr) => {
        if (!arr.length) return;

        // console.log("=====dfs", arr, visited, answer)

        for (const next of arr) {
            if (visited[next]) continue;
            
            visited[next] = true;
            dfs(graph[next]);
        }
    }
    
    for (let i = 1; i <= n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        answer++;
        
        dfs(graph[i]);
    }

    return answer   
}

console.log(solve());