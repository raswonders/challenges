const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf8").split("\n");
const examples = fs.readFileSync("./examples.txt", "utf8").split("\n");

const task1 = (data) => {
  const getNumericRepr = (rowIndex, { index, length }) => {
    const row = data[rowIndex];
    const repr = row.slice(index, index + length);

    // if repr is not a number, throw error
    if (!Number.isInteger(+repr)) {
      throw new Error(
        `Invalid numeric representation: ${repr} in data (row: ${row}, index: ${index}, length: ${length})`
      );
    }

    return +repr;
  };

  const symbols = [];
  const numbers = [];

  // find all symbols and numbers for each row
  for (let row of data) {
    row = row.trim();
    const rowSymbols = [];
    const rowNumbers = [];

    for (let i = 0; i < row.length; i++) {
      if (Number.isInteger(+row[i])) {
        rowNumbers.push({ index: i, length: 1 });

        while (Number.isInteger(+row[i + 1])) {
          rowNumbers[rowNumbers.length - 1].length++;
          i++;
        }

        continue;
      }

      if (row[i] !== ".") {
        rowSymbols.push(i);
      }
    }
    symbols.push(rowSymbols);
    numbers.push(rowNumbers);
  }

  const engine = [];
  for (let i = 0; i < numbers.length; i++) {
    number: for (let number of numbers[i]) {
      // neighbors in same row
      if (
        symbols[i].includes(number.index - 1) ||
        symbols[i].includes(number.index + number.length)
      ) {
        engine.push(getNumericRepr(i, number));
        continue number;
      }

      // neighbors in row above
      if (symbols[i - 1]) {
        for (let j = number.index - 1; j <= number.index + number.length; j++) {
          if (symbols[i - 1].includes(j)) {
            engine.push(getNumericRepr(i, number));
            continue number;
          }
        }
      }

      // neighbors in row below
      if (symbols[i + 1]) {
        for (let j = number.index - 1; j <= number.index + number.length; j++) {
          if (symbols[i + 1].includes(j)) {
            engine.push(getNumericRepr(i, number));
            continue number;
          }
        }
      }
    }
  }

  return engine.reduce((acc, curr) => acc + curr, 0);
};

const task2 = (data) => {
  const getNumericRepr = ({ x, y, length }) => {
    const row = data[y];
    const repr = row.slice(x, x + length);

    // if repr is not a number, throw error
    if (!Number.isInteger(+repr)) {
      throw new Error(
        `Invalid numeric representation: ${repr} in data (row: ${row}, index: ${index}, length: ${length})`
      );
    }

    return +repr;
  };

  const numbers = [];
  const gearCandidates = [];

  for (let row = 0; row < data.length; row++) {
    const currRow = data[row].trim();

    for (let col = 0; col < currRow.length; col++) {
      if (Number.isInteger(+currRow[col])) {
        numbers.push({ x: col, y: row, length: 1 });

        while (Number.isInteger(+currRow[col + 1])) {
          numbers[numbers.length - 1].length++;
          col++;
        }

        continue;
      }

      if (currRow[col] === "*") {
        gearCandidates.push({ x: col, y: row });
      }
    }
  }

  const gears = gearCandidates.map(({ x, y }) => {
    let gearNeighbors = [
      { x: x - 1, y: y - 1 },
      { x, y: y - 1 },
      { x: x + 1, y: y - 1 },
      { x: x - 1, y },
      { x: x + 1, y },
      { x: x - 1, y: y + 1 },
      { x, y: y + 1 },
      { x: x + 1, y: y + 1 },
    ];

    let surroundingNumbers = [];

    for (neighbor of gearNeighbors) {
      for (number of numbers) {
        for (let i = 0; i < number.length; i++) {
          if (number.x + i === neighbor.x && number.y === neighbor.y) {
            surroundingNumbers.push(number);
          }
        }
      }
    }

    surroundingNumbers = [...new Set(surroundingNumbers)];
    return surroundingNumbers.length === 2
      ? getNumericRepr(surroundingNumbers[0]) * getNumericRepr(surroundingNumbers[1])
      : 0;
  });

  return gears.reduce((acc, curr) => acc + curr, 0);
};

console.log("Task1", task1(data));
console.log("Task2", task2(data));
