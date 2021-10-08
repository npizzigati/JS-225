// Write a function named makeMultipleLister that, when invoked
// and passed a number, returns a function that logs every
// positive integer multiple of that number less than 100. Usage
// looks like this:

// Copy Code
// > let lister = makeMultipleLister(13);
// > lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91

// input: number
// output: function lister()
// - output function:
//   - input: none
//   - output: log to console
//     - positive integer muliples of number less than 100

// Algorithm:
// - declare function lister()
//   - create for loop, let multiple = number, multiple < 100,
//     multiple + number
//     - log multiple to console
// - return function lister()

function makeMultipleLister(number) {
  return function lister() {
    for (let multiple = number; multiple < 100; multiple += number) {
      console.log(multiple);
    }
  };
}

// Write a program that uses two functions, add and subtract, to
// manipulate a running total value. When you invoke either
// function with a number, it should add or subtract that number
// from the running total and log the new total to the
// console. Usage looks like this:

// Copy Code
// > add(1);
// 1
// > add(42);
// 43
// > subtract(39);
// 4
// > add(6);
// 10

function makeOperations() {
  let runningTotal = 0;
  function add(number) {
    runningTotal += number;
    console.log(runningTotal);
  }
  function subtract(number) {
    runningTotal -= number;
    console.log(runningTotal);
  }
  return [add, subtract];
}
