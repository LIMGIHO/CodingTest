const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

class LCD {
  constructor(s) {
    this.s = s;
    this.row = 2*s + 3;
    this.col = s + 2;
    this.nums = Array.from({length:10});
    this.makeZero();
    this.makeOne();
    this.makeTwo();
    this.makeThree();
    this.makeFour();
    this.makeFive();
    this.makeSix();
    this.makeSeven();
    this.makeEight();
    this.makeNine();
  }

  setInitNumArr() {
    return Array.from({length: this.row}, () => new Array(this.col).fill(' '));
  }

  setHorizon(arr, row) {
    for (let i = 1; i <= this.s; i++) {
      arr[row][i] = '-'
    }
  }

  setVertical(arr, row, col) {
    for (let i = row; i < row + this.s; i++) {
      arr[i][col] = '|'
    }
  }

  makeZero() {
    if (this.nums[0]) return this.nums[0];

    const arr = this.setInitNumArr();
    this.setHorizon(arr, 0);
    this.setHorizon(arr, (this.s+1)*2);
    this.setVertical(arr, 1, this.col-1);
    this.setVertical(arr, 1, 0);
    this.setVertical(arr, this.s+2, 0);
    this.setVertical(arr, this.s+2, this.col-1);

    this.nums[0] = arr;
  }

  makeOne() {
    if (this.nums[1]) return this.nums[1];

    const arr = this.setInitNumArr();
    this.setVertical(arr, 1, this.col-1);
    this.setVertical(arr, this.s+2, this.col-1);

    this.nums[1] = arr;
  }

  makeTwo() {
    if (this.nums[2]) return this.nums[2];

    const arr = this.setInitNumArr();
    this.setHorizon(arr, 0);
    this.setHorizon(arr, this.s+1);
    this.setHorizon(arr, (this.s+1)*2);
    this.setVertical(arr, 1, this.col-1);
    this.setVertical(arr, this.s+2, 0);

    this.nums[2] = arr;
  }

  makeThree() {
    if (this.nums[3]) return this.nums[3];

    const arr = this.setInitNumArr();
    this.setHorizon(arr, 0);
    this.setHorizon(arr, this.s+1);
    this.setHorizon(arr, (this.s+1)*2);
    this.setVertical(arr, 1, this.col-1);
    this.setVertical(arr, this.s+2, this.col-1);

    this.nums[3] = arr;
  }

  makeFour() {
    if (this.nums[4]) return this.nums[4];

    const arr = this.setInitNumArr();
    this.setHorizon(arr, this.s+1);
    this.setVertical(arr, 1, this.col-1);
    this.setVertical(arr, 1, 0);
    this.setVertical(arr, 1, this.col-1);
    this.setVertical(arr, this.s+2, this.col-1);

    this.nums[4] = arr;
  }

  makeFive() {
    if (this.nums[5]) return this.nums[5];

    const arr = this.setInitNumArr();
    this.setHorizon(arr, 0);
    this.setHorizon(arr, this.s+1);
    this.setHorizon(arr, (this.s+1)*2);
    this.setVertical(arr, 1, 0);
    this.setVertical(arr, this.s+2, this.col-1);

    this.nums[5] = arr;
  }

  makeSix() {
    if (this.nums[6]) return this.nums[6];

    const arr = this.setInitNumArr();
    this.setHorizon(arr, 0);
    this.setHorizon(arr, this.s+1);
    this.setHorizon(arr, (this.s+1)*2);
    this.setVertical(arr, 1, 0);
    this.setVertical(arr, this.s+2, 0);
    this.setVertical(arr, this.s+2, this.col-1);

    this.nums[6] = arr;
  }

  makeSeven() {
    if (this.nums[7]) return this.nums[7];

    const arr = this.setInitNumArr();
    this.setHorizon(arr, 0);
    this.setVertical(arr, 1, this.col-1);
    this.setVertical(arr, this.s+2, this.col-1);

    this.nums[7] = arr;
  }

  makeEight() {
    if (this.nums[8]) return this.nums[8];

    const arr = this.setInitNumArr();
    this.setHorizon(arr, 0);
    this.setHorizon(arr, this.s+1);
    this.setHorizon(arr, (this.s+1)*2);
    this.setVertical(arr, 1, 0);
    this.setVertical(arr, 1, this.col-1);
    this.setVertical(arr, this.s+2, 0);
    this.setVertical(arr, this.s+2, this.col-1);

    this.nums[8] = arr;
  }

  makeNine() {
    if (this.nums[9]) return this.nums[9];

    const arr = this.setInitNumArr();
    this.setHorizon(arr, 0);
    this.setHorizon(arr, this.s+1);
    this.setHorizon(arr, (this.s+1)*2);
    this.setVertical(arr, 1, 0);
    this.setVertical(arr, 1, this.col-1);
    this.setVertical(arr, this.s+2, this.col-1);

    this.nums[9] = arr;
  }
}

function solve(input) {
  const [s,n] = input[0].split(' ');
  const lcd = new LCD(Number(s));
  
  let answer = Array.from({length:lcd.row}, () => '');
  for (const num of n.split('').map(Number)) {
    for (let i = 0; i < lcd.row; i++) {
      answer[i] += lcd.nums[num][i].join('');
    }

    answer.forEach((_,i) => answer[i]+=' ');
  }

  return answer.join('\n');
}

console.log(solve(input));