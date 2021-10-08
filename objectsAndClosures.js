// Problems
// Reimplement makeList, so that it returns an Object that
// provides the interface shown above, including add, list, and
// remove methods.
// > let list = makeList();
// > list.add('peas');
// = peas added!
// > list.list();
// = peas
// > list.add('corn');
// = corn added!
// > list.list();
// = peas
// = corn
// > list.remove('peas');
// = peas removed!
// > list.list();
// = corn

function makeList() {
  return {
    todos: [],
    list() {
      this.todos.forEach(item => console.log(item));
    },
    add(item) {
      let itemIndex = this.todos.indexOf(item);
      if (itemIndex === -1) {
        this.todos.push(item);
        console.log(item + ' added');
      } else {
        console.log('Item already on list');
      }
    },
    remove(item) {
      let itemIndex = this.todos.indexOf(item);
      if (itemIndex === -1) {
        console.log('No such item on list');
      } else {
        this.todos.splice(itemIndex, 1);
        console.log(item + ' removed');
      }
    },
  };
}
