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