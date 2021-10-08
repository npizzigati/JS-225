// Ancestors
// Implement an ancestors method that returns the prototype chain
// (ancestors) of a calling object as an array of object
// names. Here's an example output:

// input: implicit context of object
// output: array of strings
// - ancestors of receiver object (from most to least immediate)
// algorithm:
// - Create empty array
// - Follow prototype chain of reciever object, pushing each
// object onto empty array in turn
//  - To get prototype, use Object.prototype.getPrototypeOf()
//  - While not to end of prototype chain, get each successive
// prototype and push to array
//    - We are end of prototype when it equals 'Object.prototype'
//  - Return array of prototypes

// - Must put the method on Object.prototype so that it's
//   available to all objects

Object.prototype.ancestors = function() {
  let prototype = Object.getPrototypeOf(this);
  const chain = [getName(prototype)];
  while (true) {
    prototype = Object.getPrototypeOf(prototype);
    if (prototype === null) break;

    chain.push(getName(prototype));
  }

  return chain;
};

function getName(object) {
  let name;
  if (object.name === undefined) {
    name = 'Object.prototype';
  } else {
    name = object.name;
  }

  return name;
}

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']
