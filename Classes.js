class Person {
  #movement;
  constructor(name, birthYear) {
    this.name = name; // Instance member - created on every object
    this.birthYear = birthYear; // Instance member - created on every object
    this._favouriteActor = null; // Instance member - created on every object
  }

  // Prototype member - created on the "prototype" object
  calcAge() {
    return 2022 - this.birthYear;
  }

  // Prototype member - created on the "prototype" object
  set favouriteActor(value) {
    this._favouriteActor = value;
  }

  // Prototype member - created on the "prototype" object
  get favouriteActor() {
    return this._favouriteActor; // Instance member - created on every object
  }
}

const p1 = new Person('Sabya', 1989);

console.log(p1.hasOwnProperty('favouriteActor'));
console.log(p1.hasOwnProperty('_favouriteActor'));

//The concepts, more or less, remain the same as that of constructor function
//The below are the differences:
//"Methods" are copied on every created object in the constructor function syntax, but,
//they are created on the "prototype" object in ES6 class syntax
//"getter" and "setter" properties are created on the "prototype" object
