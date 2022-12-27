// 00 console.log
  console.log('hello world');
  console.log('Dave T');

// 01 VARIABLES
  // the variable refers to the value stored in it.
  name = 'Dave Tuck';
  console.log(name);
  sentence = 'How are you today, nice to see you, hope you have a great day!';
  console.log(sentence);

// 03 OPERATORS 
  // used to assign values, compare values, and perform arithmetic operations.
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

/* FUNCTIONS 
  >> a JS function is a block of code designed to perform a particular task and is executed when "something" calls it.
  >> Designed to run a recipe, they can run multiple things for you at once
  >> Can store blocks of code
*/
// This function has 0 arguments (down in the parenthesis when you call the function is empty).
  // This function logs out your name to the console.
  function sayMyName() {
    console.log('Dave');        // Simply this with nothing below except closed characters, does nothing
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

// 04 BASICS OF ARRAYS []
    // Arrays are for storing multiple different values inside of them
    const groceries = ['🍌', '🍎', '🍐', '🍊'];
      console.log(groceries);     // this gives you the entire array
      console.log(groceries[0]);  // this gets you the banana alone
      console.log(groceries[1]);  // this gets you the apple alone
      console.log(groceries[3]);  // this gets you the orange alone
        // this is called indexing, grabbing one of the indexes.
    groceries.push('🍪');
    groceries.push('🫐');         // this adds a value to the array
    console.log(groceries);     
    console.log(groceries[4]);
    // slice() method:
      // If you want multiple values from an array at the same time
      // it includes 0, but does not include the upper index:
      console.log(groceries.slice(0, 3));  // (0, 3) will include indexes 0, 1, and 2, and won't include index 3
      console.log(groceries.slice(3, 6));  // (0, 6) will include indexes 3, 4, and 5, and won't include index 6 (in this example there isn't a 6, but you can put it here if you want to include the entire array)
      console.log(groceries.slice(1, 5));
    
    // array methods: slice, push, indexOf, length
    // indexOf:
      // gives you the value within an array for a specific index
      // not super common, but good to know
      console.log(groceries.indexOf('🍊'));
      console.log(groceries.indexOf("🍎"));
      console.log(groceries.indexOf('🍪'));
    // length
      // tells you the overall length of the array.  index 0 = 1, index 1 = 2, etc.
      console.log(groceries.length);

// 05 OBJECTS  {}
    // Objects are a type of variable, quite similar to Arrays, but they have something called "key-value pairs".
      // key value pairs consist of properties
    /*
    const objectName = {    
      key1: 'value1',      
      key2: "value2",
      key3: `value3`
    } 
     */
    const person1 = {
      firstName: 'Leonardo',
      lastName: 'Dicaprio',
      character: 'Mr. Candy',
      shirt: 'white'
    };
    // Dot Notation VS Bracket Notation (different ways of accessing properties within an object)
      // dot notation (first way of accessing an object)
    console.log(person1.shirt);
    console.log(person1.character);
      // bracket notation (second way of accessing an object)
    console.log(person1['firstName']);
    console.log(person1['shirt']);

    // Assigning a new value to an object
      // this adds a new key value with it's property to an object
      // can also utilize dot notation or bracket notation
        // dot notation:
    person1.phone = "(546)-208-6543"
    console.log(person1.phone);
        // bracket notation:
    person1['shoes'] = 'black';
    console.log(person1.shoes);

    console.log(person1); // notice in the drop-down how the object is automatically alphabetized!  cool.

    const person2 = {
      firstName: 'Jamie',
      lastName: 'Fox',
      shirt: 'red',
      character: 'Django',
      shoes: 'black'
    }
    console.log(person2);
    person2.phone = '457-213-2344';
    console.log(person2['character']);
    console.log(person2.lastName);

    const person3 = {
      firstName: "Quazi",
      shirt: "black"
    }
    console.log(person3);
    console.log(person3['shirt']);
    console.log(person3.firstName);

  // Turn this in to a function that says "Hi, my name is Quazi and my shirt is black."
    // My attempt (you can't reference objects outside of the function apparently, this was what I was trying to do.)
  let myAttempt = (firstName, shirt) => {
    const info = {
      firstName: "Jack motherf*ckin' Black",
      shirt: "black, but it has decals"
    }
    const introduction = `Hi, my name is ${[info.firstName]}, and my shirt is also ${[info.shirt]}.  It's not a f*cking coincidence, b*tch!`
    return introduction;
  };
  console.log(myAttempt())
    // Example
  const introducer = (firstName, shirt) => {
    const person = {
      firstName: "Owen",  
      shirt: "green"          
    }
    const hair = {
      color: "black",
      length: "medium"
    }
    const intro = `Hi, my name is ${person.firstName}, and my shirt color is ${person.shirt}.  My hair color is ${hair.color} and is ${hair.length} length.`
    return intro;
  }
  console.log(introducer());

