// const person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName: this.firstName + this.lastName,
// };

// In the above function, this refers to the global object
// How can we change the object so it does what we want?

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName() {
    return this.firstName + this.lastName;
  }
};

console.log(person.fullName());
