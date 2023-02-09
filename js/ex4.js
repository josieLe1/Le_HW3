/* HW3
   Example 4 JavaScript code
*/
console.log("Le's Output from HW3 Example 4");

var num1 = Number(prompt('Enter the first integer number'));
if (Number.isInteger(num1)!== true) {
  alert (`Not an integer number. Please try again!`);
}
if (Number.isInteger(num1) === true) {
  var num2 = Number(prompt('Enter the second integer number'));
  if (Number.isInteger(num2) !== true) {
    alert (`Not an integer number. Please try again!`);
  } else {
    let sum;
    let sub;
    let mul;
    let div;
    let mod;
    if ((Number.isInteger(num1) === true) && (Number.isInteger(num2) === true)) {
      sum = num1 + num2;
      sub = num1 - num2;
      mul = num1 * num2;
      div = num1 / num2;
      mod = num1 % num2;
      console.log(`
      Addition: ${sum}
      Subtraction: ${sub}
      Multiplication: ${mul}
      Division: ${div}
      Modulo: ${mod}
      `)
    }
  }
}