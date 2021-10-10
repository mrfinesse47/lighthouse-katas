const conditionalSum = function (values, condition) {
  // Your code here
  let evnTotal = 0;
  let oddTotal = 0;

  for (el of values) {
    if (el % 2 === 0) {
      evnTotal += el;
    } else {
      oddTotal += el;
    }
  }
  return condition === "even" ? evnTotal : oddTotal;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); //114
console.log(conditionalSum([], "odd")); //0
