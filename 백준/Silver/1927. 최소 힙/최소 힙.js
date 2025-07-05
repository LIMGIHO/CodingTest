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

  list() {
    return this.heap;
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }
  
  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();
    
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const currentVal = this.heap[index];

    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      const parentVal = this.heap[parentIdx];

      if (parentVal > currentVal) {
        this.heap[index] = parentVal;
        this.heap[parentIdx] = currentVal;
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
      const currentVal = this.heap[index]
      let smallestIdx = index;

      if (this.heap[leftChildIdx] && this.heap[smallestIdx] > this.heap[leftChildIdx]) {
        smallestIdx = leftChildIdx;
      }

      if (this.heap[rightChildIdx] && this.heap[smallestIdx] > this.heap[rightChildIdx]) {
        smallestIdx = rightChildIdx;
      }

      if (smallestIdx !== index) {
        this.heap[index] = this.heap[smallestIdx];
        this.heap[smallestIdx] = currentVal;
        index = smallestIdx;
      } else {
        break;
      }
    }
  }
}


function solve(S) {
    // const n = Number(S[0]);
    const nums = S.slice(1).map(Number);
    const n = nums.length;
    const answer = [];
    
    const minHeap = new MinHeap();

    for (let i = 0; i < n; i++) {
      const num = nums[i];
      if (num === 0) {
        answer.push(minHeap.pop());
        // console.log(minHeap.list());
      } else {
        minHeap.push(num);
      }
      // console.log("in for : ", minHeap.list());
    }


    console.log(answer.join('\n'));
}

solve(input);