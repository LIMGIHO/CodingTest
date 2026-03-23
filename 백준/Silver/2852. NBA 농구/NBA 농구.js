const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const teamSummary = {
        '1' : {
            score:0, winTime:0, startTime:0, vs:'2'
        }, 
        '2' : {
            score:0, winTime:0, startTime:0, vs:'1'
        }
    }

    for (let i = 1; i <= N; i++) {
        const [team, time] = input[i].split(' ');
        const [mm, ss] = time.split(":").map(Number);
        const convertedTm = mm * 60 + ss;

        const me = teamSummary[team];
        const vs = teamSummary[me.vs];
        
        if (me.score !== vs.score) {
            if (me.score > vs.score) me.winTime += convertedTm - me.startTime;
            else vs.winTime += convertedTm - vs.startTime;
        }
        
        // if (i === N) {
            
        // } else {
            me.startTime = convertedTm;
            vs.startTime = convertedTm;
            me.score++;
        // }

        if (i === N && me.score !== vs.score) {
            if (me.score > vs.score) me.winTime += 2880 - convertedTm;
            else vs.winTime += 2880 - vs.startTime;
        }
    }

    const makeTimeFormat = (time) => {
        return `${String(Math.floor(time / 60)).padStart(2,'0')}:${String(time % 60).padStart(2,'0')}`
    }

    const team1 = makeTimeFormat(teamSummary['1'].winTime);
    const team2 = makeTimeFormat(teamSummary['2'].winTime);
    return team1 + '\n' + team2;
}

console.log(solve(input));
