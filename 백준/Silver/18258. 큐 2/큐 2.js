const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.existsSync('dev/stdin') 
        ? fs.createReadStream('dev/stdin')
        : process.stdin,
    crlfDelay: Infinity
});

class Queue {
    constructor() {
        this.que = [];
        this.front = 0;
        this.back = -1;
        this.print = [];
    }

    push (val) {
        this.que.push(val);
        this.back++;

        if (this.front === -1) this.front = 0;
    }

    pop () {
        if (this.front >= 0 && this.front <= this.back) {
            this.print.push(this.que[this.front++]);
        }
        else 
            this.print.push(-1);
    }

    printFront() {
        const num = (this.front > this.back || !this.que[this.front])
                    ? -1 : this.que[this.front];
            
        this.print.push(num);
    }

    printBack() {
        const num = (this.back < this.front || !this.que[this.back]) 
                    ? -1 : this.que[this.back];
            
        this.print.push(num);
    }

    printSize () {
        const size = this.back - this.front + 1;
        this.print.push(size < 0 ? 0 : size);
    }

    printIsEmpty () {
        const isEmpty = this.back - this.front < 0 ? 1 : 0;
        this.print.push(isEmpty);
    }
}

let N;
const que = new Queue();
rl.on('line', (line) => {
    if (N === undefined) {
        N = +line;
        return;
    }
    const [op, num] = line.trim().split(' ');
    
    if (op === 'push')
        que.push(+num);
    else if (op === 'pop')
        que.pop();
    else if (op === 'front')
        que.printFront();
    else if (op === 'back')
        que.printBack();
    else if (op === 'empty')
        que.printIsEmpty();
    else if (op === 'size')
        que.printSize();
});

rl.on('close', () => {
    // lines 배열로 처리
    console.log(que.print.join('\n'))
});

