// The code below throws an error:

// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

// What kind of problem does this error highlight? Use an IIFE to
// address it, so that code runs without error.


// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// var arraySum = (function sum(arr, sum) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers, sum);

// sum += arraySum;  // ?

// Consider the output below:

// Copy Code
// countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!
// Implement a function countdown that uses an IIFE to generate
// the desired output.

// input: number
// output: countdown logged to console from number to zero, both
// inclusive

// algorithm:
// use a for loop to count down, logging index to console on each
// iteration
// use IIFE:

// function countdown(number) {
//   (function (number) {
//     for (let i = number; i >= 0; i--) {
//       console.log(i);
//     }
//   })(number);
// }

// Using recursion:
function countdown(number) {
  (function countdowner(number) {
      if (number < 0) return;
      console.log(number);
      number -= 1;
      countdowner(number);
  })(number);
}

countdown(7);
