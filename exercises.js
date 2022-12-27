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