/* HW3
   Example 7 JavaScript code
*/
console.log("Le's Output from HW3 Example 7");

let hr = Number(prompt('Enter hour (0 <= value <= 23)'));
if ((Number.isInteger(hr) === true) && ((hr >= 0) && (hr <= 23))) {
  let min = Number(prompt('Enter minute (0 <= value <= 59)'));
  if ((Number.isInteger(min) === true) && ((min >= 0) && (min <= 59))){
    let sec = Number(prompt('Enter second (0 <= value <= 59)'));
    if ((Number.isInteger(sec) === true) && ((sec >= 0) && (sec <= 59))){
      let hrLater = hr;
      let minLater = min;
      let secLater = sec +1;
      if (secLater > 59) {
        minLater = min +1;
        secLater = 0;
        hrLater = hr;
        if (minLater > 59) {
          hrLater = hr +1;
          minLater = 0;
          if (hrLater > 23) {
            hrLater = 0;
            minLater = 0;
            secLater = 0;
          }
        }
      } else {
        secLater;
        minLater;
        hrLater;
      }
      console.log(`
      Time input: ${hr}h${min}m${sec}s
      One second later: ${hrLater}h${minLater}m${secLater}s
      `)
    } else {
      alert (`Not a valid second. Start again`);
    }
  } else {
    alert (`Not a valid minute. Start again`);
  }
} else {
  alert (`Not a valid hour. Start again`);
}