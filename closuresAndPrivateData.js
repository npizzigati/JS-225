// Create a makeCounterLogger function that takes a number as an
// argument and returns a function. When we invoke the returned
// function with a second number, it should count up or down from
// the first number to the second number, logging each number to the
// console:

// > let countlog = makeCounterLogger(5);
// > countlog(8);
// 5
// 6
// 7
// 8
// > countlog(2);
// 5
// 4
// 3
// 2

// Input: number
// Output: function
// - function input: number
// - function output: logged to the console
//   - numbers up to or down from first number, both ends inclusive

// Algorithm:
// Return function from first function:
// - This function should access a closed over variable which is
// the input number from the first function

// - This function should take one input number
// loop from the
// closed over input number
// to the new input number, inclusive
// - incrementing by 1, if firstNumber is less than secondNumber
// - decrementing by 1, if firstNumber is greater than secondNumber
// logging the iteration index to the console

function makeCounterLogger(firstNumber) {
  return function(secondNumber) {
    if (firstNumber <= secondNumber) {
      for (let i = firstNumber; i <= secondNumber; i++) {
        console.log(i);
      }
    } else {
      for (let i = firstNumber; i >= secondNumber; i--) {
        console.log(i);
      }
    }
  };
}
