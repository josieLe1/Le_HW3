/* HW3
   Example 1 JavaScript code
*/

console.log("Le's Output from HW3 Example 1");

const num1 = prompt("Enter an integer between 1 - 100");
if (num1 >= 1 && num1 <= 100) {
   alert(`Thank you! You entered ${num1}, a valid number`);
}
else {
   if ((num1 < 1 || num1 > 100) || isNaN (num1)) {
      alert(`Sorry, ${num1} is not a valid entry`);
   }
}