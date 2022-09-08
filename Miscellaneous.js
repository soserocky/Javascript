let x = { a: 1, b: 'x', c: { d: 3 } };
let y = Object.assign({}, x);
// console.log(x.c.d);
// console.log(y.c.d);
// x.c.d = 4;
// console.log(x.c.d);
// console.log(y.c.d);

console.log(x.b);
console.log(y.b);
x.b = 'y';
console.log(x.b);
console.log(y.b);
