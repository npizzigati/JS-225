// Using partial function application implement a function, sub5,
// that returns the value of a number subtracted by 5.

function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5);
}

// sub5(10); // 5
// sub5(20); // 15
// Solution
// This code is a bit limited however, because we can only
// subtract by 5. Implement the makeSubN function below so that
// we can supply any value we want to be subtracted from a, and
// get a new function that will always subtract this value.

// function subtract(a, b) {
//   return a - b;
// }

function makeSubN(n) {
  return function (a) {
    return subtract(a, n);
  };
}

// let sub5 = makeSubN(5);
// sub5(10); // 5
// Solution
// Although the solution above is more flexible, we now want to
// be able to supply any operation, not just
// subtraction. Implement makePartialFunc below.

// Copy Code
function makePartialFunc(func, b) {
  return function (a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

// let multiplyBy5 = makePartialFunc(multiply, 5);

// multiplyBy5(100); // 500
// Solution
// In our previous solution, multiplyBy5 retains access to func
// and b long after makePartialFunc has finished execution. What
// makes this possible?

// Solution
// Consider the code below:

// Copy Code
let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function (students) {
    return rollCall('Math', students);
  };
}

// let mathRollCall = makeMathRollCall();
// mathRollCall(subjects['Math']);
// // => Math:
// // => Fatima
// // => Gary
// // => Susan
// Implement makeMathRollCall such that it returns a partially
// applied rollCall function, with the subject as 'Math'.
