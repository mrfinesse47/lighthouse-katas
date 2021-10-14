const organizeInstructors = function (instructors) {
  let allPossibleCourses = [];
  const courseIns = {};
  //need to parse all courses

  instructors.forEach((instructor) => {
    allPossibleCourses.push(instructor.course);
  });

  allPossibleCourses = [...new Set(allPossibleCourses)]; //removes duplicates

  instructors.forEach((instructor) => {
    allPossibleCourses.forEach((course) => {
      if (instructor.course === course) {
        if (!courseIns[course]) {
          courseIns[course] = []; //initilize if it doesnt exist
        }
        courseIns[course].push(instructor.name);
      }
    });
  });
  return courseIns;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);

// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }

// {
//   CourseName: [instructors]
// }
