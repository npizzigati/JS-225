// myBind() Improved
// Our earlier implementation of the Function.prototype.bind was
// simplistic. Function.prototype.bind has another trick up its
// sleeve besides hard-binding functions to context objects. It's
// called partial function application. Read this assignment and
// the MDN documentation to learn more about partial function
// application.

// Alter the myBind function written in the previous exercise to
// support partial function application.

function myFunc(a, b) {
  console.log(this.a * a * b);
}

function myBind(func, context, ...partialArgs) {
  return function (...args) {
    func.call(context, ...partialArgs, ...args);
  };
}

let myObj = { a: 2, b: 4 };
