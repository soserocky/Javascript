// //Below, 5 different copies of 'i' are created and maintained - one for each iteration
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// //Below, 1 copy of 'i' is created and maintained - same copy for every iteration
// for (var i = 1; i <= 5; i++) {
//   console.log(i);
// }

for (var i = 1; i <= 5; i++) {
  setTimeout((i) => console.log(i), i * 1000, i);
}
