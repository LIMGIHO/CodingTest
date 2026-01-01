const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

class Deque {
    constructor() {
        this.front = [];
        this.back = [];
        this.out = [];

        this.frontHead = -1;
        this.backHead = -1;
        this.frontTail = -1;
        this.backTail = -1;
    }

    pushFront(x) {
        this.front.push(x);
        this.frontTail++;

        if (this.frontHead === -1) this.frontHead++;
    }

    pushBack(x) {
        this.back.push(x);
        this.backTail++;

        if (this.backHead === -1) this.backHead++;
    }

    popFront() {
        let x;

        if (this.frontHead >= 0 && this.frontTail >= this.frontHead) {
            x = this.front.pop();
            this.frontTail--;
        } else if (this.backHead >= 0 && this.backTail >= this.backHead) {
            x = this.back[this.backHead++];
        } else 
            x = -1;
        
        this.out.push(x); 
    }

    popBack() {
        let x;

        if (this.backHead >= 0 && this.backTail >= this.backHead) {
            x = this.back.pop();
            this.backTail--;
        } else if (this.frontHead >= 0 && this.frontTail >= this.frontHead) {
            x = this.front[this.frontHead++];
        } else
            x = -1

        this.out.push(x);
    }

    size() {
        let size = 0;
        if (this.frontHead >= 0 && this.frontTail >= this.frontHead)
            size += this.frontTail - this.frontHead + 1;

        if (this.backHead >= 0 && this.backTail >= this.backHead)
            size += this.backTail - this.backHead + 1;

        this.out.push(size);
    }

    isEmpty() {
        let size = 0;
        if (this.frontHead >= 0 && this.frontTail >= this.frontHead)
            size += this.frontTail - this.frontHead + 1;

        if (this.backHead >= 0 && this.backTail >= this.backHead)
            size += this.backTail - this.backHead + 1;

        this.out.push(!size ? 1 : 0);
    }

    printFront() {
        let x;

        if (this.frontHead >= 0 && this.frontTail >= this.frontHead) {
            x = this.front[this.frontTail];
        } else if (this.backHead >= 0 && this.backTail >= this.backHead) {
            x = this.back[this.backHead];
        } else 
            x = -1;
        
        this.out.push(x); 
    }

    printBack() {
        let x;

        if (this.backHead >= 0 && this.backTail >= this.backHead) {
            x = this.back[this.backTail];
        } else if (this.frontHead >= 0 && this.frontTail >= this.frontHead) {
            x = this.front[this.frontHead];
        } else 
            x = -1;

        this.out.push(x);
    }
}

const solve = (input) => {
    const N = Number(input[0]);
    
    const deq = new Deque();
    for (let i = 1; i <= N; i++) {
        const op = input[i];
        if (op[0] === '1')
            deq.pushFront(Number(op.split(' ')[1]));
        else if (op[0] === '2')
            deq.pushBack(Number(op.split(' ')[1]));
        else if (op[0] === '3')
            deq.popFront();
        else if (op[0] === '4')
            deq.popBack();
        else if (op[0] === '5')
            deq.size();
        else if (op[0] === '6')
            deq.isEmpty();
        else if (op[0] === '7')
            deq.printFront();
        else if (op[0] === '8')
            deq.printBack();
    }

    return deq.out.join('\n');
}

console.log(solve(input));