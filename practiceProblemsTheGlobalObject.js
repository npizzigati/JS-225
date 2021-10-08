// Practice Problems: The Global Object
// Be sure to use Chrome Snippets for this assignment. You can
// use other browser tools or Node, but we will assume that
// you're using Chrome. If you do use Node or another browser,
// you may see different results and even experience errors. We
// introduce Chrome Snippets in this assignment.

// With strict mode not enabled, what object serves as the
// implicit execution context? What happens when strict mode is
// enabled?

// A: In browser, Window object; in Node.js, global oblect. When
// strict mode is enabled, the implicit execution context in the
// browser is ? and in node it is an empty object

// What does the code below log?

// Copy Code
a = 10;

console.log(window.a === a);

// A : true


// What does the code below log?

// Copy Code
// "use strict"

// a = 10;

// console.log(window.a === a);

// A: true

// What does the code below do?

// Copy Code
// function func() {
//   let b = 1;
// }

// func();

// console.log(b);
// Solution
// A: The variable b is defined in the local scope of the
// function when we call the function. It is, however,
// unaccessible outside the function, so when we try to log it to
// the console, we get an error.

// What does the code below do?

// Copy Code
// function func() {
//   b = 1;
// }

// func();

// console.log(b);
// Solution
// Outside of strict mode, b is set to the window object and
// logged to the console.
// Inside strict mode, this will throw an error since we fail to
// declare b inside the function

// What does the code below log?

// Copy Code
// "use strict"

// function func() {
//   b = 1;
// }

// func();

// console.log(b);
