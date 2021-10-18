const makeCase = function (input, caseType) {
  let resultStr = input;

  typeof caseType === "object"
    ? caseType.forEach((c) => {
        resultStr = convertCase(resultStr, c);
      })
    : (resultStr = convertCase(input, caseType));
  return resultStr;
};

const camel = (input) => {
  let res = removeSpaces(firstEveryLetterToUpper(input));
  return res[0].toLowerCase() + res.slice(1);
};

const pascal = (input) => {
  return removeSpaces(firstEveryLetterToUpper(input));
};

const snake = (input) => {
  return input.replace(/\s/g, "_");
};

const kebab = (input) => {
  return input.replace(/\s/g, "-");
};

const title = (input) => {
  return firstEveryLetterToUpper(input);
};

const vowel = (input) => {
  return input.replace(/[aeiouy]/g, (vowel) => vowel.toUpperCase());
};

const consonant = (input) => {
  return input.replace(/[^aeiouy]/g, (cons) => cons.toUpperCase());
};

//helper functions-------------------------------------------------//

const firstEveryLetterToUpper = (input) => {
  return input.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
};

const removeSpaces = (input) => {
  return input.replace(/\s/g, "");
};

const convertCase = (input, caseType) => {
  let resultStr = "";
  switch (caseType) {
    case "camel":
      resultStr = camel(input);
      break;
    case "pascal":
      resultStr = pascal(input);
      break;
    case "snake":
      resultStr = snake(input);
      break;
    case "kebab":
      resultStr = kebab(input);
      break;
    case "title":
      resultStr = title(input);
      break;
    case "vowel":
      resultStr = vowel(input);
      break;
    case "consonant":
      resultStr = consonant(input);
      break;
    case "upper":
      resultStr = input.toUpperCase();
      break;
    default:
      resultStr = input;
  }
  return resultStr;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

//expected output

// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING
