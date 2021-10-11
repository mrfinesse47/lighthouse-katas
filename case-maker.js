const camelCase = function (input) {
  const inputArray = [...input]; //creates an array we will do this C style
  let resultString;
  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === " ") {
      //-32
      // ch.codePointAt(pos)

      inputArray[i + 1] = String.fromCharCode(
        inputArray[i + 1].codePointAt(0) - 32
      ); //im assuming everything is lower case otherwise would bug fix
    }
  }

  resultString = inputArray.toString();
  resultString = resultString.replace(/,/gi, "");
  return resultString.replace(/ /gi, "");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious
