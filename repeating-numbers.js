const repeatNumbers = (data) => {
  let result = "";
  console.log(data.length);
  for (let k = 0; k < data.length; k++) {
    for (let i = 0; i < data[k][1]; i++) {
      console.log(data[k][0]);
      result += data[k][0].toString();
    }
    if (k < data.length - 1) {
      result += ", ";
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));

console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);

console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

// 1111111111
// 11, 222
// 10101010, 343434343434, 9292
