/* HW3
   Example 3 JavaScript code
*/
console.log("Le's Output from HW3 Example 3");
//input.slice(0,3).tolowerCase()

const input = prompt ("Enter a day of the week (first 3 letters in lowercase)");

switch (input) {
  case "sun":
    console.log(`
    You entered: ${input} 
    The following day is: mon`);
    break;
  case "mon":
    console.log(`
    You entered: ${input} 
    The following day is: tue`);
    break;
  case "tue":
    console.log(`
    You entered: ${input} 
    The following day is: wed`);
    break;
  case "wed":
    console.log(`
    You entered: ${input} 
    The following day is: thu`);
    break;
  case "thu":
    console.log(`
    You entered: ${input} 
    The following day is: fri`);
    break;
  case "fri":
    console.log(`
    You entered: ${input} 
    The following day is: sat`);
    break;
  case "sat":
    console.log(`
    You entered: ${input} 
    The following day is: sun`);
    break;
  default:
    console.log("Not a valid day");
}