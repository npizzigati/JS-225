// Practice Problems: Prototypes and Prototypal Inheritance
// Write a function that returns the object on a given object's
// prototype chain where a property is defined. See the example
// code below:

// input: object, string (property key)
// output: object (the object that defines the property)

// algorithm:
// need to use hasOwnProperty method, or getOwnPropertyNames
// traverse upwards along prototype chain, at each object
// checking to see if method is the own property of that method

// To traverse the chain, get the prototype of each object
// using Object.getPrototypeOf method

// return null if property found nowhere on prototype chain.

// function getDefiningObject(object, propKey, result = {}) {
//   console.log(`Looking at:`);
//   console.log(Object.getOwnPropertyNames(object));
//   if (object.hasOwnProperty(propKey)) {
//     result.result = object;
//     return 0;
//   }
//   if (object === Object.prototype) {
//     console.log('Property not found in prototype chain');
//     result.result = null;
//     return 0;
//   }

//   console.log('Will now look one step up in prototype chain');
//   const prototype = Object.getPrototypeOf(object);
//   getDefiningObject(prototype, propKey, result);
//   return result.result;
// }


// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null


// Write a function to provide a shallow copy of an object. The
// object that you copy should share the same prototype chain as
// the original object, and it should have the same own
// properties that return the same values or objects when
// accessed. Use the code below to verify your implementation:

// input: object
// output: object (shallow copy of original object)
// - must have same prototype chain
// - must have same own objects
// - must not be same object
// * Iterate over orig. object's own properties and assign them
// to new object
// * Set copy's object prototype to original object's prototype

// function shallowCopy(origObj) {
//   const copy = {};
//   Object.getOwnPropertyNames(origObj).forEach(propName => {
//     copy[propName] = origObj[propName];
//   });
//   Object.setPrototypeOf(copy, Object.getPrototypeOf(origObj));
//   return copy;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// baz.hasOwnProperty('a');  // false
// baz.hasOwnProperty('b');  // false


// Write a function that extends an object (destination object)
// with contents from multiple objects (source objects).

// Iterate through the source objects
// Iterate through the properties of the source objects and add
// them one by one to the destination object

function extend(destination, ...sources) {
  Array.from(sources).forEach(source => {
    copyProperties(destination, source);
  });
  return destination;
}

function copyProperties(destination, source) {
  Object.keys(source).forEach(key => {
    console.log(`copying ${key}`);
    destination[key] = source[key];
  });
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
