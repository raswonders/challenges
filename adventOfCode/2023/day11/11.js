const fs = require("fs");

const data = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0)
  .map((row) => row.split(""));

const examples = fs
  .readFileSync("examples.txt", "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0)
  .map((row) => row.split(""));

function generatePairs(arr) {
  let pairs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }

  return pairs;
}

const task1 = (universe) => {
  let expanded = [];
  for (let row of universe) {
    if (row.indexOf("#") === -1) {
      expanded.push(Array(row.length).fill("."));
    }

    expanded.push(row);
  }

  // identify columns with no galaxies
  const noGalaxies = [];
  outer: for (let col = 0; col < universe[0].length; col++) {
    for (let row of universe) {
      if (row[col] === "#") {
        continue outer;
      }
    }

    noGalaxies.push(col);
  }

  // normalize column indexes to account for added columns
  const noGalaxiesNorm = noGalaxies.map((col, index) => col + index);

  expanded = expanded.map((row) => {
    for (let col of noGalaxiesNorm) {
      row.splice(col, 0, ".");
    }

    return row;
  });

  // gallaxy is [row, col]
  let galaxies = [];
  for (let row = 0; row < expanded.length; row++) {
    for (let col = 0; col < expanded[row].length; col++) {
      if (expanded[row][col] === "#") {
        galaxies.push([row, col]);
      }
    }
  }

  // pair is [[row0, col0], [row1, col1]]
  let pairs = generatePairs(galaxies);
  let paths = pairs.map((pair) => {
    return (
      Math.abs(pair[0][0] - pair[1][0]) + Math.abs(pair[0][1] - pair[1][1])
    );
  });

  return paths.reduce((acc, curr) => acc + curr, 0);
};

const task2 = (universe) => {
  // gallaxy is [row, col]
  let galaxies = [];
  for (let row = 0; row < universe.length; row++) {
    for (let col = 0; col < universe[row].length; col++) {
      if (universe[row][col] === "#") {
        galaxies.push([row, col]);
      }
    }
  }

  const expandFactor = 2;
  const universeRowDim = universe.length;
  const universeColDim = universe[0].length;

  // detect empty rows in galaxies
  let expandRows = [];
  for (let row = 0; row < universeRowDim; row++) {
    if (galaxies.filter((galaxy) => galaxy[0] === row).length === 0)
      expandRows.push(row);
  }

  let expandCols = [];
  for (let col = 0; col < universeColDim; col++) {
    if (galaxies.filter((galaxy) => galaxy[1] === col).length === 0)
      expandCols.push(col);
  }

  console.log("rows", expandRows, "cols", expandCols);
  let pairs = generatePairs(galaxies);

  total = 0;
  for (let pair of pairs) {
    let rowStart = Math.min(pair[0][0], pair[1][0]);
    let rowEnd = Math.max(pair[0][0], pair[1][0]);
    for (let row = rowStart; row < rowEnd; row++) {
      total += row in expandRows ? expandFactor : 1;
    }

    let colStart = Math.min(pair[0][1], pair[1][1]);
    let colEnd = Math.max(pair[0][1], pair[1][1]);
    for (let col = colStart; col < colEnd; col++) {
      total += col in expandCols ? expandFactor : 1;
    }
  }

  return total;
};

// console.log(task1(data));
console.log(task2(examples));
