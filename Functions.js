// //Function declaration
// function calcAge1(birthYear) {
//   console.log(this);
//   return 2022 - birthYear;
// }
// let age1 = calcAge1(1989);

// //Function Expression
// let calcAge2 = function (birthYear) {
//   console.log(this);
//   return 2022 - birthYear;
// };
// let age2 = calcAge2(1989);

// //Arrow Function
// let calcAge3 = (birthYear) => {
//   console.log(this);
//   return 2022 - birthYear;
// };
// let age3 = calcAge3(1989);

// console.log(age1, age2, age3);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// const name = 'Sabyasachi';

// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a = a + b;
//   return a;
// };

// function second(x, y) {
//   var c = 2;
//   return c;
// }
// const x = first();
// console.log(x);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// myMethod();
// function myMethod() {
//   var z = 3;
//   if (z > 1) {
//     const x = 1;
//     let y = 2;
//     var a = 10;
//   }
//   console.log(a);
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// function doStuff() {
//   let a = first;
//   console.log(a);
// }
// doStuff();
// var first = findValue();

// function findValue() {
//   return 2;
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// var a = 10;
// let b = first();
// const c = 30;
// console.log(a);
// console.log(b);
// console.log(c);

// function first() {
//   return 20;
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

//null, undefined, NaN, 0 are all "falsy" values

// if (!numberOfProducts) deleteShoppingCart();

// const numberOfProducts = 10;

// function deleteShoppingCart() {
//   console.log('Shopping cart deleted and all products unloaded');
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// const sabya = {
//   name: 'Sabya',
//   birthYear: 1989,
//   calcAge: function () {
//     return 2022 - this.birthYear;
//   },
// };

// console.log(sabya.calcAge());

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// const upperFirstWord = function (str) {
//   const [firstWord, ...others] = str.split(' ');
//   return [firstWord.toUpperCase(), ...others].join(' ');
// };

// const oneWord = function (str) {
//   return str.split(' ').join('').toLowerCase();
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is fun!', upperFirstWord);
// transformer('Javascript is fun!', oneWord);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// const greet = function (greeting) {
//   return function (name) {
//     return `${greeting}, ${name}`;
//   };
// };
// const greeterHey = greet('Hey');
// console.log(greeterHey('Sanjay'));

// const greeterNamaste = greet('Namaste');
// console.log(greeterNamaste('Amit'));

// const greetArrow = (greeting) => (name) => `${greeting}, ${name}`;

// const greeterArrowHey = greetArrow('Hey');
// console.log(greeterArrowHey('Sanjay'));

// const greeterArrowNamaste = greetArrow('Namaste');
// console.log(greeterArrowNamaste('Amit'));
