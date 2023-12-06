const fs = require("fs");

// const data = fs.readFileSync("./examples.txt", "utf-8").split("\n");
const data = fs.readFileSync("./input.txt", "utf-8").split("\n");

const time = data[0]
  .split(":")[1]
  .trim()
  .split(" ")
  .filter((el) => el !== "")
  .map((el) => parseInt(el));

const distance = data[1]
  .split(":")[1]
  .trim()
  .split(" ")
  .filter((el) => el !== "")
  .map((el) => parseInt(el));

const task1 = (time, distance) => {
  let result = [];

  for (let i = 0; i < time.length; i++) {
    let solutions = 0;
    let low, high;

    if (time[i] % 2 === 0) low = high = time[i] / 2;
    else {
      low = Math.floor(time[i] / 2);
      high = low + 1;
    }

    for (; low > 0 && high < time[i]; low--, high++) {
      if (low * high > distance[i]) {
        solutions += low === high ? 1 : 2;
      }
    }

    result.push(solutions);
  }

  return result.reduce((acc, el) => acc * el, 1);
};

const task2 = (data) => {
  const time = data[0]
    .split(":")[1]
    .trim()
    .split(" ")
    .filter((el) => el !== "")
    .join("");

  const distance = data[1]
    .split(":")[1]
    .trim()
    .split(" ")
    .filter((el) => el !== "")
    .join("");

  return task1([+time], [+distance]);
};

console.log(task1(time, distance));
console.log(task2(data));
