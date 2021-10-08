// Create a school object. The school object uses the student
// object from the previous exercise. It has methods that use and
// update information about the student. Be sure to check out the
// previous exercise for the other arguments that might be needed
// by the school object. Implement the following methods for the
// school object:

// addStudent: Adds a student by creating a new student and
// adding the student to a collection of students. The method
// adds a constraint that the year can only be any of the
// following values: '1st', '2nd', '3rd', '4th', or
// '5th'. Returns a student object if year is valid otherwise it
// logs "Invalid Year".

const school = {
  students: [],
  addStudent(name, year) {
    const validYears = '1st 2nd 3rd 4th 5th'.split(' ');
    if (!validYears.includes(year)) {
      console.log("Invalid Year");
      return;
    }
    const student = createStudent(name, year);
    this.students.push(student);
    return student
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

  }

  getStudent(name) {
    for (let i = 1; i < this.student.length; i++) {
      if (this.students[i].name = name) {
        return this.students[i]
      }
    }
    return null;
  },
};

// enrollStudent: Enrolls a student in a course.

// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all
// courses. If the course has no grade, it uses "In progress" as
// the grade.

// courseReport: Logs the grades of all students for a given
// course name. Only student with grades are part of the course
// report.

// To test your code, use the three student objects listed
// below. Using the three student objects, produces the following
// values from the getReportCard and courseReport methods
// respectively.
function createStudent(name, year) {
  return {
    name,
    year,
    courses: {},
    notes: {},
    info() {
      console.log(`${this.name} is a ${year} year student.`);
    },
    addCourse(course) {
      this.courses[course.code] = course.name;
    },
    listCourses() {
      return this.courses;
    },
    addNote(code, note) {
      if (Object.keys(this.notes).includes(code.toString())) {
        this.notes[code] += "; " + note;
      } else {
        this.notes[code] = note;
      }
    },
    updateNote(code, newNote) {
      this.notes[code] = newNote;
    },
    viewNotes() {
      Object.keys(this.notes).forEach(code => {
        console.log(this.courses[code] + ": " + this.notes[code]);
      });
    }
  };
}
