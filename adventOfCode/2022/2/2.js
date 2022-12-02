const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(
    "Naive (part1) score is:",
    data
      .split("\n")
      .map(item => item.split(" "))
      .map(item => awardPointsNaive(item))
      .reduce((acc, curr) => (acc += curr))
  );

  console.log(
    "Correct (part2) score is:",
    data
      .split("\n")
      .map(item => item.split(" "))
      .map(item => awardPointsCorrect(item))
      .reduce((acc, curr) => (acc += curr))
  );
});

function awardPointsCorrect(game) {
  let points = 0;
  
  if (game[1] === 'X') {
    points += 0;
    if (game[0] === 'A') points += 3;
    if (game[0] === 'B') points += 1;
    if (game[0] === 'C') points += 2;
  }

  if (game[1] === 'Y') {
    points += 3;
    if (game[0] === 'A') points += 1;
    if (game[0] === 'B') points += 2;
    if (game[0] === 'C') points += 3;
  }

  if (game[1] === 'Z') {
    points += 6;
    if (game[0] === 'A') points += 2;
    if (game[0] === 'B') points += 3;
    if (game[0] === 'C') points += 1;
  }

  return points;
}

function awardPointsNaive(game) {
  let points = 0;

  if (game[0] === "A") {
    if (game[1] === "X") points += 3;
    if (game[1] === "Y") points += 6;
    if (game[1] === "Z") points += 0;
  }

  if (game[0] === "B") {
    if (game[1] === "X") points += 0;
    if (game[1] === "Y") points += 3;
    if (game[1] === "Z") points += 6;
  }

  if (game[0] === "C") {
    if (game[1] === "X") points += 6;
    if (game[1] === "Y") points += 0;
    if (game[1] === "Z") points += 3;
  }

  // award points for rock (1) paper (2) scissors (3)
  if (game[1] === "X") points += 1;
  if (game[1] === "Y") points += 2;
  if (game[1] === "Z") points += 3;

  return points;
}
