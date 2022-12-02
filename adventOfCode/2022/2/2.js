const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("My total score is:", data.split("\n")
                                        .map(item => item.split(" "))
                                        .map(item => awardPoints(item))
                                        .reduce((acc, curr) => acc += curr));
});

function awardPoints(game) {
  let points = 0;

  // award points for win (6) lose (0) or draw (3)
  // if they=A
  // if I=X its draw
  // if I=Y its win
  // if I=Z its lose
  // if they=B
  // if I=X its lose
  // if I=Y its draw
  // if I=Z its win
  // if they=C
  // if I=X its win
  // if I=Y its lose
  // if I=Z its draw

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
