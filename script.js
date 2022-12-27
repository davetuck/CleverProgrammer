// 00 console.log
  console.log('hello world');
  console.log('Dave T');

// 01 Variables: the variable refers to the value stored in it.
  name = 'Dave Tuck';
  console.log(name);
  sentence = 'How are you today, nice to see you, hope you have a great day!';
  console.log(sentence);

// 03 Operators: used to assign values, compare values, and perform arithmetic operations.
  // basically, stuff you see in math class...(+, -, =, *, /, etc)
  food = 20;          // this is hard-coded
  console.log(food);
  tipPercentage = 0.2;
  tipAmount = (food*tipPercentage);
  console.log(tipAmount);

/* data types (strings, numbers)
  numbers 👉🏼 1, 5, 100, 2.5
  strings 👉🏼 'hello', "what is up?"
  arrays 👉🏼 []
  objects 👉🏼 {}
  boolean 👉🏼 true / false
  */

/* Math Operators
  Multiply *
  Divide /
  Exponents **
  Modulo % (remainder)
  Add + 
  Subtract -
   */

/* Math Methods (round up/down, randomize):
  Math.floor() rounds down
  Math.ceil() rounds up
  Math.random()
    >>if you don't put anything inside the parenthesis, it will give you a number between 0 and 1.
    >>if you want a number between 0 and 3, multiply Math.random() * 3
  */
    rps = Math.floor(Math.random()*3);
    console.log(rps);

 /* Variables: var, const, and let
  const: the value cannot be changed
  let: the value can be changed
  var: the value can be changed (NOT RECOMMENDED).
 */

/* Conditionals (Conditional Operators)
  ==, ===, <, >, <=, >=, !=, !==
 */

/* Functions: a JS function is a block of code designed to perform a particular task and is executed when "something" calls it.
  >> Designed to run a recipe, they can run multiple things for you at once
  >> Can store blocks of code
*/
// This function has 0 arguments (down in the parenthesis when you call the function is empty).
  // This function logs out your name to the console.
  function sayMyName() {
    console.log('Dave');        // Simply this does nothing
    console.log('Tuck');
    console.log('rules');
  }
  sayMyName();                  // you have to call the function, like this

// Dynamic Functions
  // add Arguments: 
    // Arguments are the values received by the function when it is called, they behave as variables, however they only live within the function and cannot be accessed outside.
  // This function called sayMyName2.  It has one argument called 'name'.  It passes in the name argument to the function, which logs the name.
  function sayMyName2(name) {
    console.log(name);       
  }
  sayMyName2('Quazi');          

// More advanced:
  function greeting(name) {
    greet ="Hi, "+name+", nice to meet you!";  // this is clunky, use Temporate Literals to fix
    console.log(greet); 
  };
  greeting('Dave');          

// Temporate Literals: provide an easy way to interpolate variables and expressions in to strings.
  // Interpolation is an efficient way of concatenation.
  // Be sure to use back ticks `` with your string to utilize.
  function greeting(name) {
    greet =`Hi ${name}, nice to meet you!`;  //${} is temporate literals
    console.log(greet);
  };
  greeting('Johnny Depp');

// Function with multiple arguments
  // this function has multiple arguments
  // Example 1
    function multipleArguments(a, b) {
      console.log(a, b);          // Using console.log inside the function makes it so you can't reuse it.(I assume this, not for certain).
    };
    multipleArguments('dave', 'rules');
  // Example 2
    function sum(a, b) {
      return a+b;                 // Return statement stops the execution of a function and returns a value.  It makes the function reusable.  You can then use the same function in multiple places.
    };                            
    num1 = sum(1, 2);
    console.log(num1);

// Arrow Functions allow us to write shorter function syntax
  // Regular functions (OLD):
    /* function myFunction(parameter) {
      console.log(`hi ${parameter}`)
    } */
  // Arrow Functions (NEW): have the option of IMPLICIT RETURNS, where you don't need sqiuggly brackets.
  /* 
    const myFunction  = (arguments) => function data;
    console.log(myFunction(arg1, arg2));
    */
   // EXPLICIT return  (return is clearly stated within the function);
    const sumArrowExp = (a, b) => {
      return a + b;
    }
    console.log(sumArrowExp(30, 40));
   // IMPLICIT return  (remove 'return' and curly brackets {});
    const sumArrowImp = (a, b) => a + b;
    console.log(sumArrowImp(10, 50));