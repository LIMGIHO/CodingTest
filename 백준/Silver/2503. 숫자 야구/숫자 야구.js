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

function solve(S) {
    const n = Number(S[0]);
    const calls = S.slice(1).map(v => v.split(' ').map(Number));
    const ballCount = [0,0,0];
    let answer = 0;
    let temp = [];

    const isPossible = (ballCount) => {
      if (ballCount[0] === ballCount[1] || ballCount[1] === ballCount[2] || ballCount[0] === ballCount[2]) return false;

      const set = new Set(ballCount);
      
      for (let i = 0; i < calls.length; i++) {
        let cur_strike = 0;
        let cur_ball = 0;
        let [call, strike, ball] = calls[i];
        call = call.toString().split('').map(Number);

        for (let j = 0; j < 3; j++) {
          if (call[j] === ballCount[j]) cur_strike++;
          else if (set.has(call[j])) cur_ball++;
        }

        // console.log(cur_strike, strike, cur_ball, ball);

        if (cur_strike !== strike || cur_ball !== ball) return false; 
      }

      // console.log("=====", ballCount);
      return true;
    }

    for (let i = 0; i < 10; i++) {
      ballCount[0]++;
      if (ballCount[0] === 10) {
        ballCount[0] = 0;
        continue;
      }

      for (let j = 0; j < 10; j++) {
        ballCount[1]++;
        if (ballCount[1] === 10) {
          ballCount[1] = 0;
          continue;
        }

        for (let k = 0; k < 10; k++) {
          ballCount[2]++;
          if (ballCount[2] === 10) {
            ballCount[2] = 0;
            continue;
          }

          if (isPossible(ballCount)) {
            answer++;
            // temp.push(ballCount.join(''));
          }
        }
      }
    }
    

    console.log(answer);

    // console.log(calls);
}

solve(input);


