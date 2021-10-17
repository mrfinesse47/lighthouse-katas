const generateBoard = (whiteQueen, blackQueen) => {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]; //super useful for testing. if you comment out the for loops below

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (x === whiteQueen[0] && y === whiteQueen[1]) {
        board[x][y] = 1;
      }
      if (x === blackQueen[0] && y === blackQueen[1]) {
        board[x][y] = 1;
      }
    }
  }
  return board;
};

const queenThreat = (generatedBoard) => {
  let xCoord = [];
  let yCoord = [];

  //hunt for the queens.

  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      if (generatedBoard[i][j] === 1) {
        xCoord.push(i);
        yCoord.push(j);
      }
    }
  }

  //if the are on the same line left to right or up and down
  if (xCoord[0] === xCoord[1]) {
    // console.log("line");
    return true;
  }
  if (yCoord[1] === yCoord[0]) {
    // console.log("line");
    return true;
  }

  //if on the  same diagonal
  if (Math.abs(xCoord[1] - xCoord[0]) === Math.abs(yCoord[1] - yCoord[0])) {
    // console.log("diagonal");
    return true;
  }
  //if no match
  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

//output

// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
//false
