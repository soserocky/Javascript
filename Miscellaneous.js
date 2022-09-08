// let x = { a: 1, b: 'x', c: { d: 3 } };
// let y = Object.assign({}, x);
// console.log(x.c.d);
// console.log(y.c.d);
// x.c.d = 4;
// console.log(x.c.d);
// console.log(y.c.d);

// console.log(x.b);
// console.log(y.b);
// x.b = 'y';
// console.log(x.b);
// console.log(y.b);

// const a = 1;
// function func1() {
//   console.log('func1 started execution');
//   return new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//       console.log('func1 finished execution');
//       resolve();
//     }, 2000);
//   });
// }

// function func2() {
//   console.log('func2 started execution');
//   return new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//       console.log('func2 finished execution');
//       if (a === 1) resolve();
//       else reject('func2 finished with some errors');
//     }, 2000);
//   });
// }

// function func3() {
//   console.log('func3 started execution');
//   return new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//       console.log('func3 finished execution');
//       reject('func3 finished with some errors');
//     }, 2000);
//   });
// }

// func1()
//   .then(func2)
//   .then(func3)
//   .catch((err) => console.log(err));

// const d1 = new Date();
// setTimeout(() => console.log('I love Javascipt'), 2000);
// for (let i = 0; i < 1000000; i++) {
//   if (i % 2 === 0) console.log(i);
// }
// const d2 = new Date();
// console.log(
//   `setTimeout being run after ${(d2.getTime() - d1.getTime()) / 1000} seconds`
// );

function f() {
  let i = 1;
  setTimeout(() => console.log('i = 1', i), i * 1000);

  i = 2;
  setTimeout(() => console.log('i = 2', i), i * 1000);

  i = 3;
  setTimeout(() => console.log('i = 3', i), i * 1000);

  i = 4;
  setTimeout(() => console.log('i = 4', i), i * 1000);

  i = 5;
  setTimeout(() => console.log('i = 5', i), i * 1000);

  console.log('Hi');
}

f();
