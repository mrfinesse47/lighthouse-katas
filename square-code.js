const squareCode = function (message) {
  const arrayMsg = [...message.replace(/\s/g, "")];
  const squareRoot = Math.ceil(Math.sqrt(arrayMsg.length));
  console.log(squareRoot);
  let tmpStr = "";

  for (let i = 0; i < squareRoot; i++) {
    for (let j = 0; j < squareRoot && arrayMsg[i + j * squareRoot]; j++) {
      tmpStr += String(arrayMsg[i + j * squareRoot]);
    }
    tmpStr += " ";
  }
  return tmpStr;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);

// clu hlt io

// clu
// hlt
// io

// fto ehg ee dd

// fto
// ehg
// ee
// dd

// hae and via ecy

// hae
// and
// via
// ecy

// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
