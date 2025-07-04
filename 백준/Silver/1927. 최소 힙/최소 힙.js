const fs = require('fs');

// 입력 전체를 읽어서, 줄 단위 배열로 만들기
let inputPath = '/dev/stdin';
// 개발 환경에서는 dev/stdin 파일 사용
if (fs.existsSync('dev/stdin')) {
    inputPath = 'dev/stdin';
}

const input = fs.readFileSync(inputPath)
  .toString()
  .trim()
  .split('\n');

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        const curVal = this.heap[index];

        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            const parentVal = this.heap[parentIdx];

            if (parentVal > curVal) {
                [this.heap[parentIdx], this.heap[index]] = [curVal, parentVal];
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    heapifyDown() {

        let index = 0;
        
        while (true) {
            const leftChildIdx = index * 2 + 1;
            const rightChildIdx = index * 2 + 2;
            let smallestChildIdx = index;

            // 왼쪽 자식이 존재하고 현재 값보다 작은지 확인
            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx] < this.heap[smallestChildIdx]) {
                smallestChildIdx = leftChildIdx;
            }

            // 오른쪽 자식이 존재하고 가장 작은 값보다 작은지 확인
            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] < this.heap[smallestChildIdx]) {
                smallestChildIdx = rightChildIdx;
            }

            // 더 이상 교환할 필요가 없으면 종료
            if (smallestChildIdx === index) {
                break;
            }

            // 값 교환
            [this.heap[index], this.heap[smallestChildIdx]] = [this.heap[smallestChildIdx], this.heap[index]];
            index = smallestChildIdx;
        }   
    }

    pop() {
        if (this.heap.length === 0) return 0;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }
}

function solve(S) {
    const n = Number(S[0]);
    const nums = S.slice(1).map(Number);
    const answer = [];

    const minHeap = new MinHeap();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num === 0) {
            answer.push(minHeap.pop());
            continue;
        }

        minHeap.insert(num);
    }
    
    console.log(answer.join('\n'));
}

solve(input);
