const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const skill = input.slice(1).map(str => str.split(' ').map(Number));

    const getTeamScore = (team) => {
        let score = 0;
        for (let i = 0; i < N / 2; i++) {
            const a = team[i];
            for (let j = 0; j < N / 2; j++) {
                if (i === j) continue;
                const b = team[j];
                score += skill[a][b];
            }
        }

        return score;
    }

    const getLinkTeam = (team) => {
        const starTeam = new Set(team);
        const linkTeam = [];
        for (let i = 0; i < N; i++) {
            if (!starTeam.has(i))
                linkTeam.push(i);
        }

        return linkTeam;
    }

    let answer = Infinity;
    const tmp = [];
    const getCombination = (start) => {
        if (tmp.length === N/2) {
            const starScore = getTeamScore(tmp);
            const linkScore = getTeamScore(getLinkTeam(tmp));
            // console.log(tmp.join(' '), starScore, linkScore);

            if (answer > Math.abs(starScore - linkScore))
                answer = Math.abs(starScore - linkScore);
        }

        for (let i = start; i < N; i++) {
            tmp.push(i);
            getCombination(i+1);
            tmp.pop();
        }
    }

    getCombination(0);
    return answer;
}

console.log(solve(input));

