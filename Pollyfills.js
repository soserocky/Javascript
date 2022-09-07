const person = {
  firstName: 'Sabyasachi',
  lastName: 'Patnaik',
};

function getName() {
  return `${this.firstName} ${this.lastName}`;
}

let name = getName.bind(person);
console.log(name());

Function.prototype.myBind = function (obj) {
  return this.call(obj);
};

let myName = getName.myBind(person);
console.log(myName());
