// const urlDecode = function (text) {
//   text = text.replace(/%20/g, " "); //removing %20 replacing with space
//   const arrayOfArgs = [];
//   const resultObj = {};
//   let lhs = "";
//   let rhs = "";

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === "&") {
//       //perhaps i could use the method below instead of iterating through the string, but this was fun too.
//       arrayOfArgs.push(text.slice(0, i));
//       text = text.slice(i + 1);

//       i = -1; //essentially sets i to 0;
//     }
//   }
//   arrayOfArgs.push(text);

//   //now that we have all the args in an array we need to set it to an object

//   arrayOfArgs.forEach((arg) => {
//     lhs = arg.slice(0, arg.indexOf("=")); //could do this on one line but didn't, and decided to use in between variables for readability.
//     rhs = arg.slice(arg.indexOf("=") + 1);
//     resultObj[lhs] = rhs;
//   });

//   return resultObj;
// };

const urlDecode = function (text) {
  let decoded = text.replace(/(?:%20)/g, " ").split(/(?:=|&)/g);
  let objects = {};
  for (let i = 0; i < decoded.length; i++) {
    if (i % 2 === 0) {
      objects[decoded[i]] = decoded[i + 1];
    }
  }
  return objects;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));

console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"
