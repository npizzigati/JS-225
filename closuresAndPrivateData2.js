// We'll build a simple todo list program using the techniques
// we've seen in this assignment. Write a makeList function that
// returns a new function that implements a todo list. The
// returned function should have the following behavior:

// When called with an argument that is not already on the list,
// it adds that argument to the list.
// When called with an argument that is already on the list, it
// removes the element from the list.
// When called without arguments, it logs all items on the
// list. If the list is empty, it logs an appropriate message.

// > let list = makeList();
// > list();
// The list is empty.
// > list('make breakfast');
// make breakfast added!
// > list('read book');
// read book added!
// > list();
// make breakfast
// read book
// > list('make breakfast');
// make breakfast removed!
// > list();
// read book

// input: none
// output: function
// - output function:
//   input: none or string
//   - if input is none, print contents of list
//   - if input is string:
//     - if string is not on list, put it there
//     - else, remove string from list

// algorithm:
// declare todos array and initialize to empty array
// return function list(...args):
// - if args is empty, log contents of list to console
//   - iterate over list, logging each element
// - if args is not empty
//   - check if item is on list (find index)
//     - yes: remove item from list
//       - splice array using index
//     - no: push item onto list

function makeList() {
  const todos = [];
  function list(...args) {
    if (args.length === 0) {
      log(todos);
      return;
    }
    const item = args[0];
    const itemIndex = todos.indexOf(item);
    if (itemIndex === -1) {
      todos.push(item);
      console.log(`${item} added`);
    } else {
      todos.splice(itemIndex, 1);
      console.log(`${item} removed`);
    }
  }
  return list;
}

function log(todos) {
  for (let item of todos) {
    console.log(item);
  }
}
