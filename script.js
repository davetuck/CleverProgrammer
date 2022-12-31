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

  // // All Array Methods:
  //   let arr = [1, 2, 3, 4];
  //   arr.push(9);                   // [1, 2, 3, 4, 9]
  //   arr.pop();                     // [1, 2, 3, 4]
  //   arr.shift();                   // [2, 3, 4]
  //   arr.unshift(10);               // [ 10, 2, 3, 4]
  //   arr.concat(15);                // [1, 2, 3, 4, 15]
  //   arr.join("-");                 // 1-2-3-4
  //   arr.splice(2, 1, 88)           // [1, 2, 88, 4]
  //   arr.sort();                    // [1, 2, 3, 4]
  //   arr.reverse();                 // [4, 3, 2, 1]
  //   arr.splice(1, 1);              // [1, 3, 4]
  //   arr.at(1);                     // 2
  //   arr.fill(3);                   // [3, 3, 3, 3]
  //   arr.indexOf(3);                // 2
  //   arr.includes(1);               // True
  //   arr.toString();                // 1, 2, 3, 4
  //   arr.length;                    // 4
  //   arr.find((n) => n % 2 === 0);  // returns even number | return 2
  //   arr.findIndex((n) => n % 2 != 0);  // 0
  //   arr.map((n) => n * 2);         // [2, 4, 6, 8]
  //   arr.filter((n) => n % 2 != 0); // [1, 3]
  //   arr.every((n) => n < 6);       // checks if EVERY element is less than 6 | return True
  //   arr.some((n) => n < 6);        // checks if ANY elemtn isless than 6 | return True
  //   arr.reduce((sum, current) => sum + current); // 10
  //   arr.forEach(alert);            // for each element call alert and display values
  //   Array.isArray(arr);            // true whenever the value is an array and false if not.  | return True


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

  // You can also write it this way:
    // This way you can pass in different values in the console log for the parameters.
  const introducer1 = (firstName, shirt, assets, liabilities, color, length) => {
    const person = {
      firstName: firstName,  
      shirt: shirt,
      assets: assets,
      liabilities: liabilities,
      netWorth: function () {                       // the function is actually a METHOD
        return person.assets - this.liabilities;      //'this' will also associate the object name with the function
      }     //  👆🏼     these    👆🏼    both associate the object we're underneath/within/referring to.
    }
    const hair = {
      color: color,
      length: length
    }
    const intro = `Hi, my name is ${person.firstName}, and my shirt color is ${person.shirt}.  My hair color is ${hair.color} and is ${hair.length} length.  BTW, my net worth is $${person.netWorth()} so that means I'm better than you.`
    return intro;                                                                                                                                   // this is a method because it is  👆🏼key.👆🏼value 👆🏼this is how you call it just like a regular function
  }
  console.log(introducer1("Leonardo", "white", 1000000000, 54323423, "sh*tty blonde", "medium"));
  console.log(introducer1("Danny Brown", "stained", 1231231234, 1234555, "neon green", "short"));

  // METHODS
    // a method is a property containing a function definition (ie: Math.floor(), Math.ceil(), Math.random())
    // Properties:
      // car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white
    // Methods:
      // car.start(), car.drive(), car.brake(), car.stop()

// 06 FOR LOOPS
  // Loops just repeat the same line of code, again and again.
  // Example 1
    const fruits = ['🍌', '🍎', '🍐', '🍊', '🍌', '🍎', '🍐', '🍊', '🍌', '🍎', '🍐', '🍊'];
    // console.log(fruits[0]);    
    // console.log(fruits[1]);
    // console.log(fruits[2]);
    // console.log(fruits[3]);    // this takes way too long for larger loops
    //                     👇🏼 this means "run the same amount of times as there are items in this array"
    for (let i = 0; i < fruits.length; i++) // 👈🏼 "i++" just means increment i by one.  You can increment by 2 with i = i + 2 and so on.
    //    👆🏼 this specifies the position to start looping at.  0 will begin at the start of the array.
    console.log(i, fruits[i]);
    
    // there's a better way of writing this loop:
    const emojis = ['🤣', '😬', '🤢', '🤔', '🤪', '😎', '😅', '😝', '🤬']
    //          👇🏼 you can call this whatever you want, as long as it matches in the console.log(asdflkj);
    for (const emoji of emojis) {
      console.log(emoji); // 👆🏼 this just has to match the array title
    }

  // Example 2
    const numbers = [1, 2, 3, 4, 5, 6];

    // for loop
    for (let i = 0; i < numbers.length; i++)
    console.log(numbers[i]);

    // better loop
    for (const number of numbers) {
      console.log(number);
    }
  // in FOR LOOPS, you can use "in" and "of" between your variables.  
    // "of" returns a list of values of the numeric properties of the object being iterated.
    // "in" returns a list of keys on the object being iterated.

    // DOUBLING every single number of an array
    for (let i = 0; i < numbers.length; i++)
    console.log(numbers[i]*2)
      // and the better way of writing it:
    for (const number of numbers) {
      console.log(number * 2)
    }

    // Create a NEW ARRAY with numbers that are doubled from a previous array
    let result = [] // 👈🏼 this is saying you want a new array
    for (const number of numbers) {
      result.push(number * 2);
    };
    console.log(result);

      // now make that in to a FORMULA, where we square the numbers instead
    const double = (numbers) => {
      let result = []
      for (const number of numbers) {
        result.push(number ** 2)   // double astericks will square numbers
      }
      return result
    }
    console.log(double([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]));

    // sum up all numbers in an array

// 07 ARRAY AND OBJECT EXERCISES
  // Count the characters in a phrase
    // My attempt
    const howManyCharacters = () => {
      const phrase = "hey, can you go to the grocery store with me you motherfucking bitch?";
      let result = phrase.length  // be sure to type "let result", you forgot the let before, idiot.
      for (letters of phrase) {
        // console.log(letters);  apparently not necessary
      };
      return result;
    }
    console.log(howManyCharacters());  // returns a nice added up integer to the console.log

    // Example:
    const howManyLetters = (phrase1) => {
      // const phrase1 = 'hey, can you go to the grocery store with me?';  you can instead put this in the arguments for the function, then console log whatever you want.
      let result = 0;  // this is added once we add result to the for loop.
      for (index in phrase1) {
        // console.log(letters);  this returns numbers starting from zero
        // console.log(letters + 1);  this returns the numbers as a string (1, 11, 12, 13, etc.)
        // console.log(Number(letters) + 1);  // this changes the letters to number form (from a string) and adds the 1 to them.
        result = Number(index) + 1;  // this stores the correct answer, 45, in result, at the end of the loop.
      }
      // return {result: result}; can be written the same as below:
      return {result};
      // return {result: phrase1.length};
    }
    //const phrase1 = 'hey, can you go to the grocery store with me?';  // this can be passed in rather than added within the function.  It must be defined prior to console.log ing it.  It is hard-coded on this line.
    // const phrase1 = prompt('What phrase would you like to count?');  // you can also add a prompt if you don't want to hard-code in the phrase (string);
    const phrase1 = "I believe that we will win!!";
    console.log(howManyLetters(phrase1));
      // I basically did it right, but I skipped some steps.  These are the steps to manually figure out what to do.

  // Making a function that sums values in an array
  // [1, 2, 3, 4]  (this is how a human would do it)
    // result = 0
    // result = 1
    // result = 3
    // result = 6
    // result = 10

  const sumArray = (numbers) => {
    let result = 0;
    // for loop
    for (const sum of numbers) {
      console.log(sum);
      //result = result + sum;  // you wouldn't write it like this, instead you'd write the below
      result += sum; // = 👆🏼
    }
    return {result};
  }
  const nums = [1, 2, 3, 4, 5, 7, 9, 11]
  console.log(sumArray(nums));


// Determine the frequency a specific letter occurs in a phrase string.
  // letterFrequency('haha') 👉🏼 {'h': 2, 'a': 2}  (this is what we're looking for);
    // my attempt
    // const letterFrequency = (phrases) => {
    //   result = phrases[0];
    //   for (const letters in phrases) {
    //     let phrases = {
    //       phrase1: "haha",
    //       phrase2: "hehe",
    //       phrase3: "hoho",
    //       phrase4: "teehee"
    //     }
    //   };
    //   return {result};
    // };
    // console.log(letterFrequency());
    
    // // Example:
    //   // objects come in handy here, arrays aren't as good.  Key value pairs are... key.
    //   // in objects, you can't have the same key repeating twice
      const letterFrequency = (phrase) => {
        // letterFrequency('haha') 👉🏼 {'h': 2, 'a': 2}  (this is what we're looking for);
        console.log(phrase);
        // make a frequency object
        let frequency = {};
        for (const letter of phrase) {
          // check IF letter exists in frequency
            // increment the key value bu +1
            // otherwise set the value to 1
          if (letter in frequency) {
            //frequency[letter] = frequency[letter] + 1;  // you won't ever see something written like this, rather written like the below
            // frequency[letter] += 1; // if you're just incrementing something by one, you can do ++
            frequency[letter]++;
            } else {
            frequency[letter] = 1;
            };
          };
          return frequency;
        }
      // phrase = {
      //   phrase1: 'haha',
      //   phrase2: 'hehe',
      //   phrase3: 'hoho',
      //   phrase4: 'teehee'
      // };
      console.log(letterFrequency('lol, what are you doing later tonight, lol haha!'));

// Now create a function that determines repetitive words in a phrase
  const wordFrequency = (phrase) => {
    let words = phrase.split(' ');  // words is the array we're creating by splitting up the phrase.
    return letterFrequency(words);  // THIS is utilizing the previous function as it is identican in what it's trying to do.
    // let frequency = {}
    // for (const word of words) {  // this for loop is not needed to complete the function
    //   // console.log(word);
    //   if (word in frequency) {
    //     frequency[word]++
    //   } else {
    //     frequency[word] = 1
    //   }
    // }
    // console.log(words)
    // return frequency;
  }
  console.log(wordFrequency('lol hi lol hello hello bitch, where in the hell are you bitch?'));

  // incremental operators
    // ++, --, +=, +=1
  // phrase.split(' '); this will split the words in a string into separate array inputs