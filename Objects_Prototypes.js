//Constructor function

function Person(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}
//The constructor function just above does the following:
//1. Creates a new function called 'Person' and a property 'prototype' on it.
//2. Creates an empty object commonly called the prototype object.
//3. Creates a property called 'constructor' on the "prototype" object that points to the constructor function
//4. Points the 'prototype' property of the constructor function to the above newly created empty object
//5. Creates a '__proto__' property on the "prototype" object that points to the Object.prototype object
//6. Object.prototype is the "prototype" object of "Object" function
//7. Since, Object.prototype is an object, it, too, like every object, has a "__proto__" property which is set to 'null'
//8. Javascript engine setting the Object.prototype.__proto__ = null marks the end of the prototype chain

let p1 = new Person('sabya', 1989);

console.log(Object.prototype);
//The 'new' operator above does the following:
//1. Creates an empty object, creates a variable 'p1' that references the object
//2. Points 'this' to the newly created empty object
//3. Creates 2 new properties 'name' and 'birthYear' and assigns them
//4. Creates a property '__proto__' and points to the empty object, commonly called the prototype object as described above
//5. Returns the 'p1' object

//console.log(p1.name);
//console.log(p1.birthYear);

//Please note: All the above mentioned steps like the 'prototype' object creation, linking of properties to other entities,
//assignment of 'this' to the created object, assignment of __proto__ property of objects created to the prototype object etc.
//happens only due to the usage of the 'new' keyword.
//Had it been a simple function call like - let x = Person('sabya', 1989); all the above "magic" would not have happened.

Person.prototype.calcAge = function () {
  return 2022 - this.birthYear;
};
//Every constructor function gets a 'prototype' property which is essentially an object.
//The "prototype" object is a prototype for all the OBJECTS CREATED FROM 'Person' function
//The 'prototype' property above attaches a new method('calcAge') on the "prototype" object
//which is now available to all the objects created using the constructor function
//The 'this' keyword now points to the 'p1' object(just after p1 object creation)
//console.log(p1.calcAge());

//Prototypal Inheritance

const Employee = function (n, y, t) {
  this.name = n;
  this.yob = y;
  this.type = t;
  this.company = 'KGS';

  Employee.prototype.totalEmployees++;
};
Employee.prototype.totalEmployees = 0;

Employee.prototype.calcAge = function () {
  return 2022 - this.yob;
};

Employee.prototype.greet = function () {
  return `Hi, I am ${this.name}, aged ${this.calcAge()} years and ${
    this.type === 'p' ? 'an employee' : 'a contactor'
  } of ${this.company}`;
};

const PermanentEmployee = function (n, y) {
  Employee.call(this, n, y, 'p');
};

PermanentEmployee.prototype = Object.create(Employee.prototype);
PermanentEmployee.prototype.constructor = PermanentEmployee;
//On the line just above, we had to reset the constructor property on the PermanentEmployee.prototype back to the
//PermanentEmployee (constructor) function because when we do PermanentEmployee.prototype = Object.create(Employee.prototype);,
//the constructor property on the PermanentEmployee.prototype is overwritten to point to the Employee function.
//Not sure if it is a bug or it was intentionally implemented this way, but, that is how javascript works.

const ContractorEmployee = function (n, y) {
  Employee.call(this, n, y, 'c');
};

ContractorEmployee.prototype = Object.create(Employee.prototype);
ContractorEmployee.prototype.constructor = ContractorEmployee;

let sabya = new PermanentEmployee('Sabyasachi', 1989);
//console.log(sabya.greet());

let manish = new ContractorEmployee('Manish', 1992);
//console.log(manish.greet());

//console.log(`Total Employees: ${Employee.prototype.totalEmployees}`);

//console.dir(sabya.__proto__.constructor); //Remember: PermanentEmployee.prototype.constructor = PermanentEmployee; is important

Array.prototype.pickfirst = function () {
  return this[0];
};
Array.prototype.picklast = function () {
  return this[this.length - 1];
};
let arr = [112, 332, 34];
//console.log(arr.pickfirst());
//console.log(arr.picklast());
