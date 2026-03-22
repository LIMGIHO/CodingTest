const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

class absMinHeap {
    constructor() {
        this.heap = [];
    }

    heapyUp() {
        let cur = this.heap.length-1;
        const v = this.heap[cur];

        while (cur > 0) {
            const parent = Math.floor((cur-1)/2);
            const pVal = this.heap[parent];

            if (Math.abs(v) < Math.abs(pVal)
            || (Math.abs(v) === Math.abs(pVal) && v < pVal)
            ) {
                this.heap[parent] = v;
                this.heap[cur] = pVal;
                cur = parent;
            } else
                break;
        }
    }

    heapyDown() {
        const last = this.heap.pop();
        this.heap[0] = last;

        let cur = 0;
        while (cur < this.heap.length) {
            const lt = cur * 2 + 1;
            const rt = cur * 2 + 2
            
            let curVal = this.heap[cur];
            let nextIdx = -1
            if (Math.abs(curVal) < Math.abs(this.heap[lt])
            && Math.abs(curVal) < Math.abs(this.heap[rt])
            ) break;

            if (Math.abs(curVal) > Math.abs(this.heap[lt])
            || (Math.abs(curVal) === Math.abs(this.heap[lt]) && curVal > this.heap[lt])
            ) {
                nextIdx = lt;
                curVal = this.heap[lt];
            }

            if (Math.abs(curVal) > Math.abs(this.heap[rt])
            || (Math.abs(curVal) === Math.abs(this.heap[rt]) && curVal > this.heap[rt])
            ) {
                nextIdx = rt;

            }

            if (nextIdx === -1) break;

            const originVal = this.heap[cur];
            this.heap[cur] = this.heap[nextIdx];
            this.heap[nextIdx] = originVal;
            cur = nextIdx;
        }
    }

    add(v) {
        this.heap.push(v);
        this.heapyUp();
    }

    print() {
        if (this.heap.length === 0) return 0;
        if (this.heap.length === 1) return this.heap.pop();

        const r = this.heap[0];
        this.heapyDown();
        // console.log(r, this.heap)
        return r;
    }

    log() {
        return thi
    }
}

const solve = (input) => {
    const N = Number(input[0]);

    const answer = [];
    const heap = new absMinHeap();
    for (let i = 1; i <= N; i++) {
        const v = +input[i];
        if (v === 0)
            answer.push(heap.print());
        else
            heap.add(v);
    }

    return answer.join('\n');
}

console.log(solve(input));

