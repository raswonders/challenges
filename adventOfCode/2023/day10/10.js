const fs = require("fs");

const readFileAndProcess = (filePath) => {
  return fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .filter((row) => row.length !== "")
    .map((row) => row.trim().split(""));
};

const example1 = readFileAndProcess("./example1.txt");
const example2 = readFileAndProcess("./example2.txt");
const example3 = readFileAndProcess("./example3.txt");
const example4 = readFileAndProcess("./example4.txt");
const data = readFileAndProcess("./input.txt");

const findStart = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "S") {
        return [i, j];
      }
    }
  }
};

const dirs = {
  "|": [
    [-1, 0],
    [1, 0],
  ],
  "-": [
    [0, -1],
    [0, 1],
  ],
  L: [
    [-1, 0],
    [0, 1],
  ],
  J: [
    [-1, 0],
    [0, -1],
  ],
  7: [
    [1, 0],
    [0, -1],
  ],
  F: [
    [1, 0],
    [0, 1],
  ],
  S: [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ]
};

const areVectorsSame = (vector1, vector2) => {
  return vector1[0] === vector2[0] && vector1[1] === vector2[1];
};

const addVectors = (vector1, vector2) => {
  return [vector1[0] + vector2[0], vector1[1] + vector2[1]];
};

const hasPath = (arr, source, target) => {
  let sourceSymbol = arr[source[0]][source[1]];
  let sourceDirs = dirs[sourceSymbol];

  for (let dir of sourceDirs) {
    if (areVectorsSame(addVectors(source, dir), target)) {
      return true;
    }
  }

  return false;
}

const traversePipe = (arr) => {
  let curr = findStart(arr);
  let prev = null;
  let steps = 0;
  let pipeSymbol = arr[curr[0]][curr[1]];
  let visited = [];

  while (!prev || pipeSymbol !== "S") {
    let possibleDirs = dirs[pipeSymbol];

    let next;
    if (pipeSymbol === "S") {
      for (dir of possibleDirs) {
        next = addVectors(curr, dir);
        // if next can backtrack, use it
        if (hasPath(arr, next, curr)) {
          break;
        }
      }
    } else {
      for (dir of possibleDirs) {
        // skip dir that would backtrack 
        next = areVectorsSame(prev, addVectors(curr, dir))
          ? next
          : addVectors(curr, dir);
      }
    }

    visited.push(curr);
    prev = curr;
    curr = next;
    steps++;
    pipeSymbol = arr[curr[0]][curr[1]];
  }

  return visited;
}

const task1 = (arr) => {
  return traversePipe(arr).length / 2;
}

console.log(task1(data));