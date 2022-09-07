// //Array Destructuring - ES6

// let arr = ['Sabyasachi', 'Patnaik', 32, 'Bengaluru'];
// let [fName, ...rest] = arr;
// //console.log(fName); //'Sabyasachi'
// //console.log(rest); //['Patnaik', 32, 'Bengaluru']

// let [firstName, lastName, age, place] = arr;
// //console.log(firstName); //'Sabyasachi'
// //console.log(lastName); //'Patnaik'
// //console.log(age); //32
// //console.log(place); //'Bengaluru'

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// console.log(numbers);

// //Object Destructuring - ES6
// const sabya = {
//   name: 'Sabya',
//   age: 32,
//   city: 'Bengaluru',
//   hobbies: ['Cricket', 'Chess'],
// };

// let { name: myName, city: myCity, age: myAge } = sabya;
// //console.log(myName, myAge, myCity);

// let sanjay = {
//   ...sabya,
//   name: 'Sanjay',
//   city: 'Mysore',
//   age: 23,
//   hobbies: ['Trekking', ...sabya.hobbies],
// };

// console.log(sabya);
// console.log(sanjay);

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };

// let { numPlanets, ...discoveryYears } = planetFacts;

// console.log(discoveryYears);
