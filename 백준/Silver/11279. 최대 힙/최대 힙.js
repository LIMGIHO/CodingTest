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

class maxHeap {
    heap = [];
    answer = [];

    push(x) {
        this.heap.push(x);
        this.heapyUp();
    }

    heapyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {            
            let parent = Math.floor((idx-1)/2);

            if (this.heap[idx] > this.heap[parent]) {
                this.switch(idx, parent);
                idx = parent;
            } else break;
        }
    }

    heapyDown() {
        let length = this.heap.length;
        if (length === 0) {
            this.answer.push(0);
            return;
        }

        this.answer.push(this.heap[0]);
        let last = this.heap.pop();
        if (length === 1) return;

        this.heap[0] = last;

        let idx = 0;
        while (true) {
            const left = idx * 2 + 1;
            const right = idx * 2 + 2;

            let nextIndex = idx;
            if (this.heap[nextIndex] < this.heap[left]) {
                nextIndex = left;
            } 
            if (this.heap[nextIndex] < this.heap[right]) {
                nextIndex = right;
            }

            if (nextIndex === idx) break;

            this.switch(idx, nextIndex);
            idx = nextIndex;
        }

    }

    switch(from, to) {
        [this.heap[from], this.heap[to]] = [this.heap[to], this.heap[from]];
    }
    

    show() {
        console.log(this.heap, this.answer);
    }
}

const solve = () => {
    const sc = new Scanner();
    let n = sc.getInt();

    const heap = new maxHeap();
    while(n) {
        const x = sc.getInt();

        if (x === 0) {
            heap.heapyDown();
        } else {
            heap.push(x);
        }
        n--;
    }
    return heap.answer.join('\n');
}

console.log(solve());