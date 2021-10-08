// Practice Problems: Constructor Functions and Prototypes (2)
// Follow the steps below:

// Create an object called shape that has a getType method.

const shape = {
  getType() {
    return this.type;
  },
  getPerimeter() {
    return this.a + this.b + this.c;
  },
};

function Triangle(a, b, c) {
  this.type = "triangle";
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape;

// Define a Triangle constructor function whose prototype is
// shape. Objects created with Triangle should have four own
// properties: a, b, c (representing the sides of a triangle),
// and type.
// Add a new method to the prototype called getPerimeter.
// Test your implementation with the following code:

// Copy Code
let t = new Triangle(3, 4, 5);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 12
t.getType();                  // "triangle"
// Since a constructor is just a function, it can be called
// without the new operator, and this can lead to unexpected
// results and errors especially for inexperienced programmers.

// Write a constructor function that can be used with or without
// the new operator, and return the same result in either
// form. Use the code below to check your solution:

function User(first, last) {
  const newObj = {};
  newObj.name = first + ' ' + last;
  return newObj;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
// Hint
// Solution
// Create a function that can create an object with a given
// object as its prototype, without using Object.create.

function createObject(obj) {
  const newObj = {};
  Object.setPrototypeOf(newObj, obj);
  return newObj;
}

let foo = {
  a: 1
};

let bar = createObject(foo);
foo.isPrototypeOf(bar);         // true
// Hint
// Solution
// Alternative Solution
// Similar to the problem above, without using Object.create,
// create a begetObject method that you can call on any object to
// create an object inherited from it:

function begetObject() {
  return Object.create(this);
  function F() {};
  F.prototype = this;
  F.prototype.constructor = F.constructor
  return new F();
}

let foo = {
  a: 1,
  begetObject,
};

let bar = foo.begetObject();
foo.isprototypeof(bar);         // true
// Hint
// Solution
// Create a function neww, so that it works like the new
// operator. For this practice problem, you may use
// Object.create.

// Copy Code
function neww(constructor, args) {
  newObj = {};
  Person.apply(newObj, args);
  Object.setPrototypeOf(newObj, Person.prototype);
  return newObj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}
