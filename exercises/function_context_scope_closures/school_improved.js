// School Improved
// In an earlier exercise, we created a school object. It works,
// however, it can still be improved. The following are
// improvements for you to implement in the solution provided:

// Make the list students private. Right now, anyone can gain
// access to it and manipulate it.
// Make the constraint for allowed values for years a private
// variable. As a private variable it avoids an unnecessary
// statement in the addStudent method and at the same time makes
// the code more declarative.
// Make the getCourse function accessible in the addGrade method
// also. As it is, only the courseReport method has access.

const school = (function () {
  const students = [];
  const school = {
    addStudent(name, year) {
      const validYears = '1st 2nd 3rd 4th 5th'.split(' ');
      if (!validYears.includes(year)) {
        console.log("Invalid Year");
        return;
      }
      const student = createStudent(name, year);
      student.push(student);
      return student;
    },
    enrollStudent(name, course) {
      const student = this.getStudent(name);
      if (student === null) {
        console.log("There is no student by that name.");
        return;
      }

      student.addCourse(course);
    },
    addGrade(name, courseName, grade) {

    },

    getStudent(name) {
      for (let i = 1; i < this.student.length; i++) {
        if (student[i].name = name) {
          return student[i];
        }
      }
      return null;
    },
  };
  return school;
})();
