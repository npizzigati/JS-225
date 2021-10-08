// // Practice Problems: Implicit and Explicit Function Execution Contexts
// // Be sure to use Chrome Snippets for this assignment. You can
// // use other browser tools or Node, but we will assume that
// // you're using Chrome. If you do use Node or another browser,
// // you may see different results and even experience errors. We
// // introduce Chrome Snippets in this assignment.

// // What will the code below output?

// // Copy Code
// // function foo() {
// //   return this;
// // }
// // this refers to the global window

// // let context = foo();
// // console.log(context);
// // Solution
// // What will the code in the previous question output in strict mode?
// // global window

// // What will the code below output? Explain the difference, if
// // any, between this output and that of problem 1.

// // Copy Code
// // let obj = {
// //   foo() {
// //     return this;
// //   },
// // };

// // let context = obj.foo();

// // console.log(context);
// // Solution
// // here, we are logging the results of calling obj.foo(), i.e.,
// // foo() was called on obj, so obj is the context

// // What will the code below output?

// // var message = 'Hello from the global scope!';
// // function deliverMessage() {
// //   console.log(this.message);
// // }
// // deliverMessage();
// // let bar = {
// //   message: 'Hello from the function scope!',
// // };
// // bar.deliverMessage = deliverMessage;
// // bar.deliverMessage();
// // Output:
// // "Hello from the global scope"
// // "Hello from the function scope"


// // What will the code below output? What would happen if we
// // replaced var on line 1 with let? Can you explain why the
// // output changes?

// // Copy Code
// // var a = 10;
// // let b = 10;
// // let c = {
// //   a: -10,
// //   b: -10,
// // };

// // function add() {
// //   return this.a + b;
// // }

// // c.add = add;

// // console.log(add());
// // console.log(c.add());
// // Solution
// // Output:
// // 20
// // 0
// // If we replaced var on line 1 with let:
// // Output:
// // We get an error when we try to access a on the global window,
// // since declaring a value with let does not set the value as a
// // field of the global window.

// // The problems above all feature implicit function execution
// // context. What methods have we learned so far that let us
// // explicitly specify what a function's execution context should
// // be?

// // Solution
// // call and apply

// // In the code below, use call to invoke add as a method on bar,
// // but with foo as the execution context. What will this return?

// // Copy Code
// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add() {
//      return this.a + this.b;
//    },
// };
// Solution
// bar.add.call(foo);
// // This should return 3

// // Given the code and desired output shown below, should you use
// // call or apply to supply explicit context and the arguments to
// // outputList? That is, which method makes the most sense to use?
// // Implement a solution using your preferred method such that the
// // desired output is logged, and explain your choice.

// let fruitsObj = {
//   list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
//   title: 'A Collection of Fruit',
// };
// function outputList() {
//   console.log(this.title + ':');
//   let args = [].slice.call(arguments);
//   args.forEach(function(elem) {
//     console.log(elem);
//   });
// }

// // // invoke outputList here
// // Desired output:
// // A Collection of Fruit:
// // Apple
// // Banana
// // Grapefruit
// // Pineapple
// // Orange
// // Solution
// // Use call, since that will lead to args being an array of
// // fruits
// outputList.call(fruitsObj, ...fruitsObj.list);

// // For an extra challenge, consider this line of code from the
// // previous problem:

// // Copy Code
// // let args = [].slice.call(arguments);
// // Inside of JavaScript functions, arguments is an object that
// // holds all of the arguments passed to the function. Bearing in
// // mind that the function author wants to iterate over the
// // arguments later in the method using an Array method, why do
// // you think he or she is invoking call?

// // To convert the array-like arguments to an actual array
// // providing the forEach method

// Why does this log undefined in strict mode?
function foo() {
  return this;
}

let context = foo();
console.log(context);

// Because this is undefined in strict mode in the global scope
