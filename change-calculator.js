const calculateChange = function (total, cash) {
  // Your code here
  let remainder = cash - total;
  const denominations = [
    { name: "twentyDollar", value: 2000 },
    { name: "tenDollar", value: 1000 },
    { name: "fiveDollar", value: 500 },
    { name: "twoDollar", value: 200 },
    { name: "oneDollar", value: 100 },
    { name: "quarter", value: 25 },
    { name: "dime", value: 10 },
    { name: "nickel", value: 5 },
    { name: "penny", value: 1 },
  ];

  const changeObj = {};

  while (remainder !== 0) {
    for (let i = 0; i < denominations.length; i++) {
      if (remainder / denominations[i].value >= 1) {
        if (!changeObj[denominations[i].name]) {
          changeObj[denominations[i].name] = 0;
        }
        changeObj[denominations[i].name] += 1;
        remainder -= denominations[i].value;

        i = -1;
      }
    }
  }
  return changeObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
