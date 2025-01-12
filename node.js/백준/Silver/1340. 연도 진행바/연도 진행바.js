const fs = require("fs");
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim();

    const given = new Date(input)
  // 주어진 날짜의 연도 추출
  const year = given.getFullYear();
  
  // 연도 시작: 1월 1일 00:00:00
  const startOfYear = new Date(year, 0, 1, 0, 0, 0);
  
  // 다음 해 시작: 다음 해 1월 1일 00:00:00
  const startOfNextYear = new Date(year + 1, 0, 1, 0, 0, 0);
  
  // 밀리초 단위로 경과한 시간과 총 시간을 계산
  const elapsed = given - startOfYear;
  const total = startOfNextYear - startOfYear;
  
  // 연도 중 지난 비율(%) 계산
  const percentage = (elapsed / total) * 100;
  

if (Number.isInteger(percentage)) console.log(percentage.toFixed(1));
else console.log(percentage.toString())
