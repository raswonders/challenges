const fs = require("fs");

const numbersSpelledOut = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const decode = (str) => {
  for (let i = 0; i < numbersSpelledOut.length; i++) {
    if (str === numbersSpelledOut[i]) return i.toString();
  }

  console.error("Could not decode", str);
};

const getLeftmostDigit = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) return [str[i], i];
  }

  return ["", Infinity];
};

const getRightmostDigit = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(parseInt(str[i]))) return [str[i], i];
  }

  return ["", -1];
};

const getLeftmostWord = (str) => {
  let leftmost;

  for (let number of numbersSpelledOut) {
    let index = str.indexOf(number);
    if (index !== -1) {
      if (leftmost === undefined) leftmost = [number, index];
      else leftmost = leftmost[1] > index ? [number, index] : leftmost;
    }
  }

  return leftmost ? leftmost : ["", Infinity];
};

const getRightmostWord = (str) => {
  let rightmost;

  for (let number of numbersSpelledOut) {
    let index = str.lastIndexOf(number);
    if (index !== -1) {
      if (rightmost === undefined) rightmost = [number, index];
      else rightmost = rightmost[1] < index ? [number, index] : rightmost;
    }
  }

  return rightmost ? rightmost : ["", -1];
};

const task2 = () => {
  let text = fs.readFileSync("./input2.txt", "utf-8");
  let lines = text.split("\n");

  calibrations = lines.map((line) => {
    let leftmostDigit = getLeftmostDigit(line);
    let leftmostWord = getLeftmostWord(line);
    let leftmostToken =
      leftmostDigit[1] < leftmostWord[1] ? leftmostDigit[0] : leftmostWord[0];

    let rightmostDigit = getRightmostDigit(line);
    let rightmostWord = getRightmostWord(line);
    let rightmostToken =
      rightmostDigit[1] > rightmostWord[1]
        ? rightmostDigit[0]
        : rightmostWord[0];

    if (isNaN(parseInt(leftmostToken))) leftmostToken = decode(leftmostToken);
    if (isNaN(parseInt(rightmostToken))) rightmostToken = decode(rightmostToken);

    let tokenPair = leftmostToken + rightmostToken;

    return parseInt(tokenPair);
  });

  return calibrations.reduce((acc, curr) => acc + curr);
};

console.log(task2());
