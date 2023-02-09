/* HW3
   Example 2 JavaScript code
*/
console.log("Le's Output from HW3 Example 2");
const userName = prompt("Please enter your name");
let unitsNo = Number(prompt("Please enter number of units completed at colleges"));
if ((Number.isInteger(unitsNo) !== true) || (unitsNo < 0)) {
   alert(`Not an appropriate number. Please try again`)
}
if ((Number.isInteger(unitsNo) === true) && (unitsNo >= 0)) {
   console.log(`${userName} has completed ${unitsNo} units`);
   alert(`
      Hello ${userName}
      Your grade standing is ${unitsNo}

      ${userName} - This is the name entered
      ${unitsNo} - Caculated as follows:
      Number of units:
      0 - 30: Freshman
      31 - 60: Sophomore
      61 - 90: Junior
      > 91: Senior
   `)
}