// Testing Object Equality
// In JavaScript, comparing two objects either with == or ===
// checks for object identity. In other words, the comparison
// evaluates as true if it's the same object on either side of ==
// or ===. This is a limitation, in a sense, because sometimes we
// need to check if two objects have the same key/value
// pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object
// arguments and returns true or false depending on whether the
// objects have the same key/value pairs.

// Parameters: two objects
// Return: boolean
// -- return true if the objects have the same key/value pairs
//    (single level)
// Approach:
// - Check the length of the keys of the two objects; if not the
//   same, return false
// - Iterate over the keys of one object
//   - At each key, check if the key is in object 2, and that the
//     value of the key is the same as the value for that key of the second object
//     - If false, return false
// - If reaching this point, return true

function objectsEqual(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    if ((!object2Keys.includes(key)) || object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
