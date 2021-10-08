// Implement makeCheckEven below, such that the last line of the
// code returns an array [2, 4].

let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function (number) {
    if (number % 2 === 0) return true;
    return false;
  };
}

let checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]

// Implement execute below, such that the return values for the two
// function invocations match the commented values.

function execute(func, operand) {
  return func(operand);
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"

// Implement makeListTransformer below such that timesTwo's return
// value matches the commented return value.

function makeListTransformer(func) {
  function arrayMultiplier(array) {
    return array.map(e => func(e));
  }
  return arrayMultiplier;
}

timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]
