const fs = require("fs");

const examples = fs
  .readFileSync("./examples.txt", "utf8")
  .split("\n")
  .map((example) => example.trim())
  .filter((example) => example.length > 0);

const data = fs
  .readFileSync("./input.txt", "utf8")
  .split("\n")
  .map((example) => example.trim())
  .filter((example) => example.length > 0);

const task1 = (data) => {
  const getPoints = (correct) => {
    if (correct === 0) return 0;
    return 2 ** (correct - 1);
  };

  const score = data.map((line) => {
    const [_, numbers] = line.split(":");
    const [winners, guesses] = numbers.split("|").map((numbers) =>
      numbers
        .trim()
        .split(/\s+/)
        .map((number) => {
          return parseInt(number);
        })
    );

    const winnersSet = new Set(winners);
    const wins = guesses.filter((guess) => winnersSet.has(guess));

    return getPoints(wins.length);
  });

  return score.reduce((acc, curr) => acc + curr, 0);
};

const task2 = (data) => {
  const cards = data.map((line) => {
    const [_, numbers] = line.split(":");
    const [winners, guesses] = numbers.split("|").map((numbers) =>
      numbers
        .trim()
        .split(/\s+/)
        .map((number) => {
          return parseInt(number);
        })
    );

    const winnersSet = new Set(winners);
    const wins = guesses.filter((guess) => winnersSet.has(guess));

    const copies = 1;
    return [wins.length, copies];
  });

  const countScratchcards = (cards) => {
    if (cards.length === 0) return 0;

    const [wins, copies] = cards[0];

    // add copies for each win 
    for (let i = 1; i <= wins; i++) {
      cards[i][1] += copies;
    }

    return copies + countScratchcards(cards.slice(1));
  };

  return countScratchcards(cards);
};

// console.log(task1(data));
console.log(task2(data));
