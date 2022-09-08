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
//PermanentEmployee function because when we do PermanentEmployee.prototype = Object.create(Employee.prototype);,
//the constructor property on the PermanentEmployee.prototype is overwritten to point to the Employee function.
//The above is an understandable way of working of javascript.

//When we create an object using the "new" keyword, the javascript engine sets the "constructor" property on
//the "prototype" object to the constructor function that is called.
//But, when we create using "Object.create()", javascript engine essentially creates an object and
//sets the "prototype" property of the constructor function (PermanentEmployee function) to the newly created object.
//Hence, the "constructor" property of the newly created object is borrowed from its parent, which points to its
//constructor function(Employee function).

const ContractorEmployee = function (n, y) {
  Employee.call(this, n, y, 'c');
};

ContractorEmployee.prototype = Object.create(Employee.prototype);
ContractorEmployee.prototype.constructor = ContractorEmployee;

let sabya = new PermanentEmployee('Sabyasachi', 1989);
console.log(sabya.greet());

let manish = new ContractorEmployee('Manish', 1992);
console.log(manish.greet());

console.log(`Total Employees: ${Employee.prototype.totalEmployees}`);

console.dir(sabya.__proto__.constructor); //PermanentEmployee.prototype.constructor = PermanentEmployee; is important
