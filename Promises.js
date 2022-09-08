//Promises are useful when "tying up" or "chaining" functions to be executed sequentially, one after another.
//The promise chaining syntax begins by functions(returning a promise) being chained by "then" blocks and culminates in a "catch"
//block to catch any error that may occur in one of the methods.
//Every function (in the function "chain") must return a promise so as to determine
//if the next function in the chain(and the subsequent functions) must be considered for execution.
//if a function(say, func1, after executing its own code) "resolves" as per a certain condition, then the next function
//would be executed, else if, the function(func1) "rejects", then the next function(and therefore, the subsequent functions)
//would not be executed and the execution would land up in the catch block of the promise chain.
//Note:
//if one of the functions(in the promise chain) contains a try...catch block and an error occurs
//then the error would be handled in the "catch" block of the function and would not be transmitted to the
//"catch" block of the promise chain.
//An explicit call of either "resolve" or "reject" is necessary to either continue with or terminate the promise "chain".
//Arguments may also be passed in the "resolve" or "reject" calls that would then be passed to the next function (in the case
//of "resolve") and to the "catch" block(in case of "reject")

function PromiseFunc() {
  return new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
      setTimeout(() => {
        resolve({ msg1: 'error flag', msg2: 'is false' });
      }, 4000);
    } else {
      setTimeout(() => {
        reject('error flag is true');
      }, 4000);
    }
  });
}

PromiseFunc()
  .then((obj) => console.log('Promise fulfilled: ' + obj.msg1 + ' ' + obj.msg2))
  .catch((error) => console.log('Sorry, promise not fulfilled: ' + error));

let students = [{ id: 1, name: 'sabya' }];

function EnrollStudent(id, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      students.push({ id: id, name: name });
      resolve(students);
    }, 2000);
  });
}

function PrintStudents(s) {
  s.forEach((x) => console.log(x.id + '-' + x.name + ', '));
}

EnrollStudent(2, 'ravish').then(PrintStudents).catch();

function func1() {
  return new Promise((resolve, reject) => {
    console.log('func1 ran');
    resolve();
  });
}
function func2() {
  return new Promise((resolve, reject) => {
    console.log('func2 ran');
    resolve('hello from func 2');
  });
}
function func3(arg) {
  return new Promise((resolve, reject) => {
    try {
      console.log(arg);
      console.log('func3 ran with some issues');
      throw new Error('cant run functions further');
    } catch (err) {
      reject(err.message);
    }
  });
}
function func4() {
  return new Promise((resolve, reject) => {
    console.log('func4 ran');
    resolve();
  });
}
func1()
  .then(func2)
  .then(func3)
  .then(func4)
  .catch((err) => console.log(err));

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise is resolved');
  }, 2000);
});

console.log(p);
