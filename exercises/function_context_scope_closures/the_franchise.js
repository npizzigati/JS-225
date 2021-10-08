// The Franchise
// The method franchise.allMovies is supposed to return the
// following array:

// Copy Code
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// Explain why this method will not return the desired object?
// Try fixing this problem by taking advantage of JavaScript
// lexical scoping rules.

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     }, this);
//   },
// };

// franchise.allMovies();

// Solve the same problem again by passing a hard-bound anonymous
// function to map.

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }.bind(this));
  },
};

franchise.allMovies();
