const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const map = {};
  input.slice(0,5).forEach((str,i) => {
    const nums = str.trim().split(/\s+/).map(Number); // 길이 5 보장
    for (let j = 0; j < 5; j++) map[nums[j]] = [i, j];
  });

  const bingo = Array.from({length:5},  () => new Array(5).fill(false));
  const calls = input.slice(5).map(str => str.split(' ').map(Number));
  const doneHorizontal = [false,false,false,false,false];
  const doneVertical = [false,false,false,false,false];
  const doneCross = [false,false];

  const checkHorizon = (x) => {
    for (let i = 0; i < 5; i++) {
      if (!bingo[x][i]) return false;
    }

    doneHorizontal[x] = true;
    return true;
  }

  const checkVertical = (y) => {
    for (let i = 0; i < 5; i++) {
      if (!bingo[i][y]) return false;
    }

    doneVertical[y] = true;
    return true;
  }

  const checkCross = (start) => {
    if (start === 0) {
      for (let i = 0; i < 5; i++) {
        if (!bingo[i][i]) return false;
      }
      doneCross[0] = true;
      return true;
    } else {
      for (let i = 4; i >= 0; i--) {
        if (!bingo[4-i][i]) return false;
      }
      doneCross[1] = true;
      return true;
    }
  }

  const getDoneLine = (x,y) => {
    let done = 0;
    if (!doneHorizontal[x]) {
      if (checkHorizon(x)) done++;
    }

    if (!doneVertical[y]) {
      if (checkVertical(y)) done++;
    }

    if (x === y) {
      if (!doneCross[0]) {
        if (checkCross(0)) done++;
      }
    }

    if (
        (x === 0 && y === 4)
      || (x === 1 && y === 3)
      || (x === 2 && y === 2)
      || (x === 3 && y === 1)
      || (x === 4 && y === 0)
    ) {
      if (!doneCross[1]) {
        if (checkCross(4)) done++;
      }
    }

    return done;
  }

  let answer = 0;
  let bingoCross = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      answer++;
      const call = calls[i][j];
      const [x,y] = map[call];
      bingo[x][y] = true;

      bingoCross += getDoneLine(x,y);

      if (bingoCross >= 3) return answer;
    }
  }
  
  return answer;
}

console.log(solve(input));
