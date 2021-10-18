const blocksAway = function (directions) {
  const location = [0, 0]; // [0] = east/west. [1]= north/south
  let direction;

  for (let i = 0; i < directions.length; i += 2) {
    if (location[0] === 0 && location[1] === 0) {
      //we assume the first move to be north on left
      if (directions[0] === "left") {
        direction = "N";
        location[1] += directions[1];
      } else {
        //we assume the first move to be east on right
        direction = "E";
        location[0] += directions[1];
      }
    } else {
      if (direction === "N") {
        if (directions[i] === "left") {
          location[0] -= directions[i + 1];
          direction = "E";
        } else {
          location[0] += directions[i + 1];
          direction = "W";
        }
      } else if (direction === "E") {
        if (directions[i] === "left") {
          location[1] += directions[i + 1];
          direction = "N";
        } else {
          location[1] -= directions[i + 1];
          direction = "S";
        }
      } else if (direction === "S") {
        if (directions[i] === "left") {
          location[0] += directions[i + 1];
          direction = "E";
        } else {
          location[0] -= directions[i + 1];
          direction = "W";
        }
      } else {
        //direction = W
        if (directions[i] === "left") {
          location[1] += directions[i + 1];
          direction = "N";
        } else {
          location[1] -= directions[i + 1];
          direction = "S";
        }
      }
    }
  }

  return { east: location[0], north: location[1] };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));

console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}
