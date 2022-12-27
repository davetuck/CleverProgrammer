// // 04 Tip Calculator App: How to get inputs from user
// food = prompt('How much did your food cost?');  //the prompt() is a built-in JavaScript functionality that helps you get the inputs from a user through the browser.
// tipPercentage = prompt('What % would you like to tip?') / 100;
// total = alert('$ '+food + '  *  '+tipPercentage*100+ "%" + "  =  " + '$ '+(food*tipPercentage));            // alert is like prompt, but for outputs rather than inputs.
// console.log("  Bill          $ "+food)
// console.log("+ Tip Amount    $ " + (food * tipPercentage) + " ("+(tipPercentage*100) + "%" + ")"); 
// console.log("= Total         $ "+(Number(food)+(Number(food)*Number(tipPercentage))));   // Number("100"); number() is a function that converts the string in to a number, 100.
//   // typically in JS you'll never use prompt or alert for user input.. you use forms.

function sum(a, b) {
  return a+b;                 // Return statement stops the execution of a function and returns a value.  It makes the function reusable.  You can then use the same function in multiple places.
}
num1 = sum(1, 2);
console.log(num1);

// Typically you wouldn't use prompt, it's just useful for exercises.
function calculateFoodTotal(food, tip) {
  const tipPercent = tip / 100;
  const tipAmount = food * tipPercent;
  const total = sum(food, tipAmount);  //this refers back to the sum() function above
  return total;
}
  console.log(calculateFoodTotal(300, 25));


