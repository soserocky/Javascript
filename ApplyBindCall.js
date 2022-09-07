const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name });
  },
};

lufthansa.book('12345', 'Sabyasachi');
lufthansa.book('98765', 'Sanjay');

//In the below code, we are borrowing the method from the 'lufthansa' object.
//However, only the reference to the 'book' method in the 'lufthansa' object is passed, the context of the object is not set to the 'lufthansa' object
//Calling the 'book' method simply, for e.g. book(), would return an error as the context of the caller object is not set
//It will be treated like any normal method call where the context of 'this' is not set
const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EU',
  bookings: [],
};

//The below code shows how to set the context of the calling object in "borrowed" methods via 'call'.
book.call(eurowings, '87436', 'Mukesh'); //'call' method calls the function immediately
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

//The below code shows how to set the context of the calling object in "borrowed" methods via 'apply'.
book.apply(swiss, ['87465', 'Shiva']); //'apply' method calls the function immediately
console.log(swiss);

//The below code shows how to set the context of the calling object in "borrowed" methods via 'bind'.
const swissBind = book.bind(swiss);
swissBind('87454', 'Amit'); //'bind' method has to be invoked explicitly to call the function
console.log(swiss);

//'apply', 'bind' and 'call' methods set the context of 'this' variable inside methods(usually that are borrowed) to the object passed as the first parameter
//It's like the 'borrowed' method being written in the calling object itself.
//'bind' method differs from 'Apply' and 'Call' methods as in the 'Bbind' method has to be invoked explicitly to call the function
//whereas the other two call the function immediately.
