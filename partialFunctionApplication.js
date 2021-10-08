// Write a function named greet that takes two arguments and logs
// a greeting:

// > greet('howdy', 'Joe');
// Howdy, Joe!
// > greet('good morning', 'Sue');
// Good morning, Sue!

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

// Use the partial function shown above and your solution to
// problem 1 to create sayHello and sayHi functions that work
// like this:

function greeterGenerator(greeting) {
  return greet.bind(null, greeting);
}

function greeterGenerator2(greeting) {
  return function(name) {
    let a = greet(greeting, name);
    console.log(a);
  };
}

// > sayHello('Brandon');
// Hello, Brandon!
// > sayHi('Sarah');
// Hi, Sarah!
// Solution
