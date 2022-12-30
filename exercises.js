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