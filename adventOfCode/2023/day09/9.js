const fs = require("fs");

const examples = fs
  .readFileSync("./examples.txt", "utf8")
  .split("\n")
  .filter((line) => line !== "")
  .map((line) => line.split(" ").map((str) => parseInt(str)));

const data = fs
  .readFileSync("./input.txt", "utf8")
  .split("\n")
  .filter((line) => line !== "")
  .map((line) => line.split(" ").map((str) => parseInt(str)));

const extrapolate = (seq, predictLast) => {
  if (seq.every((num) => num === 0)) return 0;

  const differences = [];
  for (let i = 0; i < seq.length - 1; i++) {
    differences.push(seq[i + 1] - seq[i]);
  }

  // predicts last or first member of the sequence
  return predictLast
    ? seq[seq.length - 1] + extrapolate(differences)
    : seq[0] - extrapolate(differences);
};

const task1 = (data) => {
  return data.map((line) => extrapolate(line, true)).reduce((a, b) => a + b);
};

const task2 = (data) => {
  return data.map((line) => extrapolate(line, false)).reduce((a, b) => a + b);
};

console.log(task1(data));
console.log(task2(data));
