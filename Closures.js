//A function wrapped together with its lexical scope is called a closure.
//A function, say fn, always has access to the variable environment of the execution context in which the function(fn) was created/born
//A closure is like a backpack - that carries the lexical variables (in the outer scope) along with the returned inner function.
//A closure holds reference to the memory locations of the variables in its lexical scope.
//for example - Inner function below holds reference to the memory location of "passengers" variable defined in the outer function, "book".
//Even after the outer function is popped off the call stack after returning the inner function, the variable environment
//of the outer function is always "baked" into the inner function

const book = function () {
  let passengers = 0;
  return function () {
    console.log(`${++passengers} passengers`);
  };
};

//In the below code, the book function is executed and unloaded from the call stack after returning the inner function.
//But, it returns the inner function along with its "lexical scope" - i.e. a reference to the "passengers" variable
const booked = book();

booked();
booked();
booked();

//Hence, calling the booked() method thrice increments the "passengers" variable value with each call
