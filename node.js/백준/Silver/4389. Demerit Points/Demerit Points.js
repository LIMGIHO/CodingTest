const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let arr = [];

const solution = () => {
  let answer = [];
  let merit = 0;
  let x_date;

  const getYearDiff = (from, to) => {
    const [x_yyyy, x_mm, x_dd] = from.split("-").map(Number);
    const [yyyy, mm, dd] = to.split("-").map(Number);
    
    const years = Math.floor(yyyy-x_yyyy+((mm-x_mm)/12) + ((dd-x_dd)/365));
    // if (years === 0) return;

    // for (let i = 1; i <= years; i++) {
    //     console.log("===i", i, years, merit)
    //     merit = Math.floor(merit/2);
    //     answer.push(getMessage(x_yyyy+i, mm, dd, 0));
    //   }


    return years;
  }

  const setDateFormat = (date, adder) => {
    const yyyy = Number(date.substring(0,4)) + adder;
    const mm = Number(date.substr(4,2));
    const dd = Number(date.substr(6,2));
    return `${yyyy}-${String(mm).padStart(2,'0')}-${String(dd).padStart(2,'0')}`;
  }

  const getMessage = (date) => {
    let message = ""

    if (merit === 0) {
      message = `${date} No merit or demerit points.`;
    } else {
      
      let msg = "";
      if (merit > 0) msg = "merit";
      else msg = "demerit";

      message = `${date} ${Math.abs(merit)} ${msg} point(s).`;
    }

    return message;
  }

  const setMerit = (demerit) => {
    if (merit > 0) {
      merit = merit * 2 - demerit;
    } else merit -= demerit;
  }

  const calMerit = (date) => {
    const years = getYearDiff(x_date, date);
    if (years === 0) return;

    for (let i = 0; i < years; i++) {
        if (merit >= 5) break;

        if (merit >= 0 && years - i >= 2) {
          merit++;
          i++;
        } else {
          if (merit === 0) break;
          if (merit < 0)
            merit = merit >= -2 ? 0 : Math.floor((merit*-1)/2)*-1;
          else break;
        }

        answer.push(getMessage(setDateFormat(x_date.replaceAll("-",""), i+1)))
    }
  }
  
  for (const row of arr) {
    const date = setDateFormat(row[0], 0);
    const demerit = Number(row[1]) || 0;

    if (x_date) {
        calMerit(date);
    }

    setMerit(demerit);
    answer.push(getMessage(date));
    x_date = date;
    // console.log(yyyy, mm, dd, demerit);
  }
  calMerit("9999-12-01");
  console.log(answer.join('\n'));
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ");
  
  arr.push(temp);
  
     
 }).on("close", function () {  
  solution();
 });

