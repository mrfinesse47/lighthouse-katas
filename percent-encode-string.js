// Use some sort of looping. Do Not use String.prototype.replace

const urlEncode = function (text) {
  text = text.trim();

  let slicedToTheRight = "";
  let slicedToTheLeft = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      slicedToTheRight = text.slice(i + 1);
      slicedToTheLeft = text.slice(0, i);

      text = slicedToTheLeft + "%20" + slicedToTheRight;
      i = 0;
    }
  }
  return text;
};

console.log(urlEncode("Lighthouse Labs")); // Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); // Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure"));
// blue%20is%20greener%20than%20purple%20for%20sure
