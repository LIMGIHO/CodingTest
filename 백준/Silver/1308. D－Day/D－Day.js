let input = require('fs').readFileSync('/dev/stdin').toString();

const arr = input.split('\n').map(row => row.split(' '));
const fr_yy = arr[0][0].padStart(4,'0');
const fr_mm = arr[0][1].padStart(2,'0');
const fr_dd = arr[0][2].padStart(2,'0');
const to_yy = arr[1][0].padStart(4,'0');;
const to_mm = arr[1][1].padStart(2,'0');
const to_dd = arr[1][2].padStart(2,'0');

const calDD = () => {
  const fr_date = new Date(`${fr_yy}-${fr_mm}-${fr_dd}`);
  const to_date = new Date(`${to_yy}-${to_mm}-${to_dd}`);
  const diff = (to_date - fr_date) / (60 * 60 * 24 * 1000);
  return `D-${Math.ceil(diff)}`;
}

let result = '';
if (+to_yy - +fr_yy > 1000) {
  result = 'gg';
}
else if (+to_yy - +fr_yy == 1000) {
    if (+to_mm < +fr_mm) {
        result = calDD();
    } else if (+to_mm == +fr_mm && +to_dd < +fr_dd) {
        result = calDD();
    } else {
        result = 'gg';
    }
} else {
  result = calDD();
}

console.log(result);