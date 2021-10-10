const checkAir = function (samples, threshold) {
  let totalClean = 0;
  let totalDirty = 0;

  samples.forEach((sample) => {
    if (sample === "clean") {
      totalClean++;
    } else {
      totalDirty++;
    }
  });
  return totalDirty / totalClean > threshold ? "Polluted" : "Clean";
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
