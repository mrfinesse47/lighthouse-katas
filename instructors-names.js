const instructorWithLongestName = function (instructors) {
  let indexOfLongestInstructor;
  let longerThanHowMany = 0;

  for (let i = 0; i < instructors.length; i++) {
    for (let j = 0; j < instructors.length; j++) {
      if (instructors[i].name.length > instructors[j].name.length) {
        longerThanHowMany++;
      }
      if (longerThanHowMany === instructors.length - 1) {
        indexOfLongestInstructor = i;
      }
    }
    longerThanHowMany = 0;
  }
  return instructors[indexOfLongestInstructor];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);

// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}
