const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

class Hongjun {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.maxRow = 1;
    this.maxCol = 1;
    /**
     *   2
     * 1   3
     *   0
     */
    this.direction = 0;
    this.map = [['.']];
  }

  rotate(m) {
    if (m === 'R') {
      this.direction = (this.direction + 1) % 4;
    } else {
      this.direction = this.direction === 0 ? 3 : ((this.direction - 1) % 4);
    }
  }

  newRow() {
    return Array.from({length:this.maxCol}, ()  => '#');
  }

  move() {
    switch (this.direction) {
      case 0:
        this.x += 1;
        break;
      case 1:
        this.y -= 1;
        break;
      case 2:
        this.x -= 1;
        break;
      case 3:
        this.y += 1;
        break;
    }
    
    if (!this.map[this.x]) {
      if (this.x < 0) {
        this.map.unshift(this.newRow());
        this.x = 0;
      } else {
        this.map[this.x] = this.newRow();
      }

      this.maxRow += 1;
    }

    if (!this.map[this.x][this.y]) {
      this.maxCol += 1;
      if (this.y < 0) {
        this.map.map(m => {
          if (m.length === this.maxCol) return m;
          for (let i = 0; i < this.maxCol - m.length; i++) {
            m.unshift('#');
          }
          return m;
        });
        this.y = 0;
      } else {
        this.map.map(m => {
          if (m.length === this.maxCol) return m;
          for (let i = 0; i < this.maxCol - m.length; i++) {
            m.push('#');
          }
          return m;
        });
      }
    }

    this.map[this.x][this.y] = '.';
  }

  getMap() {
    return this.map;
  }
}

const solve = (input) => {
  const n = Number(input[0]);
  const actions = input[1].split('');

  const min = [Infinity, Infinity];
  const max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  const hongjun = new Hongjun();
  for (const act of actions) {
    if (act === 'F') hongjun.move();
    else hongjun.rotate(act);
  }

  return hongjun.getMap().map(m => m.join('')).join('\n');
  
};

console.log(solve(input));
