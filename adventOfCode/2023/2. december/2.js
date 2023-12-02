const fs = require("fs");
let text = fs.readFileSync("./input.txt", "utf-8");
let examples = fs.readFileSync("./examples.txt", "utf-8");

const task1 = (input) => {
  const maxRed = 12;
  const maxGreen = 13;
  const maxBlue = 14;

  let lines = input.split("\n");
  let gameIDs = lines.map((line) => {
    line = line.trim();
    let [gameID, recordPart] = line.split(":");
    let id = gameID?.split(" ")[1] || "0";
    let records = recordPart?.split(";") || [];

    for (let record of records) {
      record = record.trim();
      let colors = record.split(",");

      for (let color of colors) {
        color = color.trim();
        let [colorValue, colorName] = color.split(" ");
        let value = parseInt(colorValue);
        if (colorName === "red" && value > maxRed) return "0";
        if (colorName === "green" && value > maxGreen) return "0";
        if (colorName === "blue" && value > maxBlue) return "0";
      }
    }

    return id;
  });

  return gameIDs.reduce((acc, id) => acc + parseInt(id), 0);
};

const task2 = (input) => {
  const lines = input.split("\n");
  const games = lines.map((line) => {
    const [gameID, recordPart] = line.split(":");
    let records = recordPart?.split(";") || [];
    if (records.length === 0) return 0;

    let minRed = 0;
    let minGreen = 0;
    let minBlue = 0;

    for (let record of records) {
      const colors = record.split(",");

      for (let color of colors) {
        color = color.trim();
        let [colorValue, colorName] = color.split(" ");
        let value = parseInt(colorValue);
        if (colorName === "red" && value > minRed) minRed = value;
        if (colorName === "green" && value > minGreen) minGreen = value;
        if (colorName === "blue" && value > minBlue) minBlue = value;
      }
    }

    return minRed * minGreen * minBlue;
  });

  return games.reduce((acc, curr) => acc + curr);
};

console.log(task1(text));
console.log(task2(text));
