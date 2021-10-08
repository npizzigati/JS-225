// Write a constructor function Circle, that takes a radius as an
// argument. You should be able to call an area method on the
// created objects to get the circle's area. Test your
// implementation with the following code:

// function Circle(radius) {
//   this.area = function() {
//     return Math.PI * (radius ** 2);
//   };
// }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// Implement the method described in the comments below:

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// Ninja.prototype.swing = function () {
//   this.swung = true;
//   return this;
// };

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// In this problem, we'll ask you to create a new instance of an
// object, without having direct access to the constructor
// function:

let ninjaA = (function() {
  function Ninja() {};
  return new Ninja();
})();

ninjaB = Object.create(ninjaA);
ninjaB.constructor = ninjaA.constructor;

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
