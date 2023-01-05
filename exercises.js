// Arrow Functions practice:

const add = (a, b) => a + b;
console.log(add(3, 4));

const sub = (a, b) => a - b;
console.log(sub(3, 4));

let div = (a, b) => a / b;
console.log(div(3, 4));

let mult = (a, b) => a * b;
console.log(mult(3, 4));

const multThenAdd = (a, b, c) => a * b + c;
console.log(multThenAdd(3, 4, 5));

const divMultPercAdd = (a, b, c, d) => (((a / b) * c) / 100) + 4;
console.log(Math.ceil(divMultPercAdd(3, 4, 5, 6)));

let yannyLaurel = (a, b, y, u, t) => a - y ** b / u + t;
console.log(yannyLaurel(6, 3, 7, 1, 2));

const fuckBitchesGetMoney = (biggy, tupac, fillmoreSlim, rosebudd) => (fillmoreSlim + rosebudd - tupac - biggy);
console.log(fuckBitchesGetMoney(9, 8, 5, 4));

// Utilizing an Object within a Function 
  const interview = (firstName, lastName, topic) => {
    let interviewee = {
      firstName: "Johnathan",
      lastName: "Fortuna",
      hair: "brown, balding but he grows it out"
    }
    let info = {
      topic: "war veteran",
      length: "one hour",
      questions: 5
    }
    let sentence = `Today's interview was done with ${interviewee.firstName} ${interviewee.lastName}.  His hair is ${interviewee.hair}.  The topic of the interview was ${info.topic}, and it went on for ${info.length}.  The amount of questions I had to chime in with was ${info.questions}.`
    return sentence;
  }
  console.log(interview());

// Function with an array that loops and adds each value to the previous values.
  const arrayAdding = () => {
    let result = 0;
    for (const sum of numbers) {
      console.log(sum);
      result = result + sum;
    }
    return {result};
  };
  let numbers = [2, 5, 6, 7, 978, 56, 45, 45, 45, 34]
  console.log(arrayAdding(numbers))

// More exercises with Loops/Arrays, etc
  // find the max number in an array of numbers
    const findMax = (minmaxnumbers) => {
      let result = minmaxnumbers[0];   // DO NOT set result to zero here (common trap), because if the array has negative numbers then it won't return the correct value.
      for (number of minmaxnumbers) {
        if (number > result) {
          result = number;
        }
      }                     // no need for an "else" statement, becuase the loop resets when the if statement is false and runs again.
      return {result};
    };
    // let minmaxnumbers = [2, 5, 8, 1, 22, 6, 4, 12, 3, 2, 1]
    console.log(findMax([2, 5, 78, 45, 34, 3, 4, 56, 3,2, 12, 45, 56, 233]));
  
// For Loops practice, because I suck at it.
    // Loops are the heart, blood, and soul of computer programming.

  const myGroceries = ['🍊', '🥑', '🍓', '🍌', '🍐', '🫐', '🍊', '🥑', '🍓', '🍌', '🍐', '🫐', '🍊', '🥑', '🍓', '🍌', '🍐', '🫐', '🍊', '🥑', '🍓', '🍌', '🍐', '🫐', '🍊', '🥑', '🍓', '🍌', '🍐', '🫐'];
  // console.log(myGroceries);
  // console.log(myGroceries[0]);
  // console.log(myGroceries[1]);
  // console.log(myGroceries[2]);
  // console.log(myGroceries[3]);

  for (let i=0; i < myGroceries.length; i++) {
    console.log(i+1, myGroceries[i]);
  }
  for (const fruit of myGroceries) {
    console.log(fruit);
  }
  // trying to count all the fruits in the array, unsuccessful thus far.  
  const fruitsFrequency = (myGroceries) => {
    let frequency = myGroceries.length;  // my problem was here, this was an empty object before.  Changed it to myGroceries.length and it worked!
    for (const fruits in myGroceries) {
      // console.log(fruits);
      // if (fruits in myGroceries) {
      //   // frequency[fruits]++
      // } else {
      //   // frequency[fruits] = 1
      // }
    }
    return frequency;
  }
  console.log(fruitsFrequency(myGroceries)+ " fruits in this array.");


// Counting the letters again for another run-through:

const howManyLetters = () => {
  let phrase = "Hey slut, bring those tits to the grocery store with me.  Actually fuck that, get naked and run to the car, we're going streaking."
  result = phrase.length;
  for (const letter in phrase) {
  }
  return result;
}
console.log(howManyLetters()+" characters in this awful string.");