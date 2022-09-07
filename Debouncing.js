let counter = 0;
let flag = true;
function getData() {
  if (flag) {
    flag = false;
    console.log('getdata ' + counter++);
  }
  setTimeout(() => {
    flag = true;
  }, 500);
}
function myFunc(a, b, fn) {
  console.log(arguments);
}

myFunc(10, 12, getData);

let arr = [];
arr.findIndex();
