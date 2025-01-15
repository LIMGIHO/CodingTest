const fs = require("fs");
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

let isName = /^[A-Za-z\s]+$/;
let isNumber = /^[0-9]+$/;
let index = 1;
let cnt = input[0];

let names = [];
let history = [];
let answer = [];
while (true) {
    const data = input[index];

    if (isName.test(data)) {
        names.push(data);
    } else if (isNumber.test(data)) {
        for (let j = 0; j < history.length; j++) {
            if (history[j]) answer.push(names[j]);
        };

        names = [];
        history = [];

        if (data == 0) break;
    } else {
        const i = +data.split(' ')[0] - 1;
        history[i] = history[i] ? false : true;
    }
    index++;
}

answer.forEach((name, i) => console.log(i+1 + " " + name));
