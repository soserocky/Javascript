const Car_Constructor_Syntax = function (make, speed) {
  this.make = make;
  this.speed = speed;

  this.accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
  };

  this.brake = function () {
    this.speed -= 10;
    console.log(this.speed);
  };
};

const c1 = new Car_Constructor_Syntax('Mercedes', 120);
const c2 = new Car_Constructor_Syntax('BMW', 110);

class Car_ES6_Syntax {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 10;
    console.log(this.speed);
  }
}
const c3 = new Car_ES6_Syntax('Audi', 120);
const c4 = new Car_ES6_Syntax('Honda', 110);
