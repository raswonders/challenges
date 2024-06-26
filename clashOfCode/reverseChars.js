function isLower(char) {
  return /^[a-z]$/.test(char);
}

function isUpper(char) {
  return /^[A-Z]$/.test(char);
}

const alphaStr = "abcdefghijklmnopqrstuvwxyz";
const alpha = alphaStr.split("");

function myFunction(message) {
  return message
    .split(" ")
    .reverse()
    .map((word) => {
      return word
        .split("")
        .map((c) => {
          if (isLower(c)) {
            return alpha[alpha.length - 1 - alpha.indexOf(c)];
          }

          if (isUpper(c)) {
            return alpha[alpha.length - 1 - alpha.indexOf(c.toLowerCase())].toUpperCase();
          }

          return c;
        })
        .join("");
    })
    .join(" ");
}

module.exports = myFunction;