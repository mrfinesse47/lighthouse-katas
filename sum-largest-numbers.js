//JavaScript does have some built-in helper functions for working with arrays such as .sort, .map, .filter, and others, but we highly recommend avoiding those functions while working through the prep katas

const sumLargestNumbers = function (data) {
  let largestNumber;
  let secondLargestNumber;
  let biggerThanHowMany = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i] > data[j]) {
        biggerThanHowMany++;
      }
    } //end for j
    if (biggerThanHowMany === data.length - 1) {
      largestNumber = data[i];
    }
    if (biggerThanHowMany === data.length - 2) {
      secondLargestNumber = data[i];
    }
    biggerThanHowMany = 0;
  } //end for i

  return secondLargestNumber + largestNumber;
};

console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126
return "hi";
