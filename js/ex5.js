/* HW3
   Example 5 JavaScript code
*/
console.log("Le's Output from HW3 Example 5");

var pwd = prompt('Please enter your password');

for (let i = 1; i<3; i) {
   if (pwd !== "secret") {
      var pwd = prompt('Enter your password again');
      i++;
      if ((i === 3) && (pwd !== "secret")){
         console.log(`Your account is locked! You failed to enter the correct password ${i} times`)
      }
   }
   if (pwd === "secret") {
      console.log(`You entered the correct password after ${i} attempt(s)`)
      break;
   }
}