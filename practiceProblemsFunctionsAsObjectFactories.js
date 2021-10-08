// Practice Problems: Functions as Object Factories
// In these problems, we will be developing a factory function
// for objects representing countries.

// Consider the code below:

// Copy Code
// let chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// let canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// let southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };
// Think about what is necessary and unnecessary in this
// code. Where is there duplication?

// Given our observations about the code above, implement a
// factory function for our country objects following the
// template laid out below:

// let chile = makeCountry('The Republic of Chile', 'South America');
// let canada = makeCountry('Canada', 'North America');
// let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

// chile.getDescription();       // "The Republic of Chile is located in South America."
// canada.getDescription();      // "Canada is located in North America."
// southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."

// We've decided that we want to track which countries we've
// visited, and which we haven't. Alter the factory function so
// that the object it returns includes a property visited with a
// value of false.

// Solution

// This situation seems a bit problematic, though. Suppose we
// want to add a country that we've already visited. Alter the
// factory function to use an optional visited parameter with a
// default value of false.

// Solution
// Let's add a method to our country objects that lets us visit
// them. Implement a method visitCountry that sets the visited
// property to true.

function makeCountry(name, continent, visited = false) {
  const country = {
    name,
    continent,
    visited: visited,
    getDescription() {
      const verb = (visited) ? "have" : "haven't";
      return `${this.name} is located in ${this.continent}. ` +
             `I ${verb} visited ${this.name}`;
    },
    visitCountry() {
      this.visited = true;
    }
  };
  return country;
}

// Solution
// Finally, let's update our getDescription function to reflect
// the visited data. Assuming that canada.visited is false, your
// code should look like this:

// Copy Code
// canada.getDescription(); // "Canada is located in North
// America. I haven't visited Canada."
// canada.visitCountry();
// canada.getDescription(); // "Canada is located in North
// America. I have visited Canada."
