const talkingCalendar = function (date) {
  const dateArray = date.split("/").map(Number); //makes an array of numbers

  return (
    numToMonth(dateArray[1]) +
    " " +
    numOfDayToString(dateArray[2]) +
    ", " +
    dateArray[0]
  );
};

const numOfDayToString = (num) => {
  let result = "";
  if (num === 1) {
    result += 1 + "st";
  } else if (num === 2) {
    result += 2 + "nd";
  } else if (num === 3) {
    result += 2 + "rd";
  } else {
    result += num + "th";
  }
  return result;
};

const numToMonth = (num) => {
  switch (num) {
    case 1:
      return "January";

    case 2:
      return "February";

    case 3:
      return "March";

    case 4:
      return "April";

    case 5:
      return "May";

    case 6:
      return "June";

    case 7:
      return "July";

    case 8:
      return "August";

    case 9:
      return "September";

    case 10:
      return "October";

    case 11:
      return "November";

    case 12:
      return "December";
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// output:

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
