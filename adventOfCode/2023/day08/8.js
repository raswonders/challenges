const fs = require("fs");

// const data = fs
//   .readFileSync("./examples.txt", "utf8")
//   .split("\n")
//   .map((line) => line.trim())
//   .filter((line) => line.length > 0);

// const data = fs
//   .readFileSync("./examples2.txt", "utf8")
//   .split("\n")
//   .map((line) => line.trim())
//   .filter((line) => line.length > 0);

const data = fs
  .readFileSync("./input.txt", "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

const instructions = data.slice(0, 1)[0];
const graphData = data.slice(1);
const graph = {};

for (line of graphData) {
  const [node, edges] = line.split("=").map((item) => item.trim());
  const [left, right] = edges.split(",").map((item) => {
    item = item.trim();
    return item.replace(/[\(\)]/g, "");
  });

  graph[node] = { L: left, R: right };
}

countSteps = (graph, instructions) => {
  let steps = 0;
  let curr = "AAA";
  while (curr !== "ZZZ") {
    let dir = instructions[steps % instructions.length];
    curr = graph[curr][dir];
    steps++;
  }

  return steps;
};

const task1 = (graph, instructions) => countSteps(graph, instructions);

const task2 = (graph, instructions) => {
  let steps = 0;
  let currNodes = Object.keys(graph).filter((node) => node.endsWith("A"));

  currNodes = currNodes.map((node) => {
    let steps = 0;
    while (!node.endsWith("Z")) {
      let dir = instructions[steps % instructions.length];
      node = graph[node][dir];
      steps++;
    }

    return steps;
  });

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }

  function lcmOfArray(array) {
    let multiple = array[0];
    for (let i = 1; i < array.length; i++) {
      multiple = lcm(multiple, array[i]);
    }
    return multiple;
  }

  console.log(lcmOfArray(currNodes));
};

// console.log(task1(graph, instructions));
console.log(task2(graph, instructions));
