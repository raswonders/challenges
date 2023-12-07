const fs = require("fs");

const examples = fs
  .readFileSync("examples.txt", "utf8")
  .split("\n")
  .filter((line) => line.length > 0)
  .map((line) => {
    line = line.trim();
    const [cards, bid] = line.split(" ");
    return [cards, +bid];
  });

const data = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .filter((line) => line.length > 0)
  .map((line) => {
    line = line.trim();
    const [cards, bid] = line.split(" ");
    return [cards, +bid];
  });

function createHand() {
  return {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    T: 0,
    J: 0,
    Q: 0,
    K: 0,
    A: 0,
  };
}

const sumWinnings = (games) => {
  return games.reduce((acc, game, index) => {
    const bid = game[1];
    const rank = index + 1;
    return acc + rank * bid;
  }, 0);
};

genSortingFunction = (cardStrength) => {
  return (sortGames = (a, b) => {
    const [cardsA, bidA, typeA] = a;
    const [cardsB, bidB, typeB] = b;

    if (typeA !== typeB) {
      return typeA - typeB;
    }

    for (let i = 0; i < cardsA.length; i++) {
      if (cardsA[i] !== cardsB[i]) {
        return cardStrength[cardsA[i]] - cardStrength[cardsB[i]];
      }
    }
  });
};

const task1 = (games) => {
  const cardStrength = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  games = games.map((game) => {
    const [cards, bid] = game;
    const hand = createHand();

    for (const card of cards) {
      hand[card]++;
    }

    const handValues = Object.values(hand);

    if (handValues.includes(5)) {
      return [...game, 6];
    } else if (handValues.includes(4)) {
      return [...game, 5];
    } else if (handValues.includes(3) && handValues.includes(2)) {
      return [...game, 4];
    } else if (handValues.includes(3)) {
      return [...game, 3];
    } else if (handValues.filter((value) => value === 2).length === 2) {
      return [...game, 2];
    } else if (handValues.includes(2)) {
      return [...game, 1];
    } else {
      return [...game, 0];
    }
  });

  const gamesSorted = games.sort(genSortingFunction(cardStrength));

  return sumWinnings(gamesSorted);
};

const task2 = (games) => {
  const cardStrength = {
    J: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    Q: 12,
    K: 13,
    A: 14,
  };

  games = games.map((game) => {
    const [cards, bid] = game;
    const hand = createHand();

    for (const card of cards) {
      hand[card]++;
    }

    // track jokers independently
    const jokers = hand.J;
    delete hand["J"];
    const handValues = Object.values(hand);

    switch (jokers) {
      case 5:
        return [...game, 6];
      case 4:
        return [...game, 6];
      case 3:
        if (handValues.includes(2)) {
          return [...game, 6];
        } else {
          return [...game, 5];
        }
      case 2:
        if (handValues.includes(3)) {
          return [...game, 6];
        } else if (handValues.includes(2)) {
          return [...game, 5];
        } else {
          return [...game, 3];
        }
      case 1:
        if (handValues.includes(4)) {
          return [...game, 6];
        } else if (handValues.includes(3)) {
          return [...game, 5];
        } else if (handValues.filter((value) => value === 2).length === 2) {
          return [...game, 4];
        } else if (handValues.includes(2)) {
          return [...game, 3];
        } else {
          return [...game, 1];
        }
      case 0:
        if (handValues.includes(5)) {
          return [...game, 6];
        } else if (handValues.includes(4)) {
          return [...game, 5];
        } else if (handValues.includes(3) && handValues.includes(2)) {
          return [...game, 4];
        } else if (handValues.includes(3)) {
          return [...game, 3];
        } else if (handValues.filter((value) => value === 2).length === 2) {
          return [...game, 2];
        } else if (handValues.includes(2)) {
          return [...game, 1];
        }
      default:
        return [...game, 0];
    }
  });

  const gamesSorted = games.sort(genSortingFunction(cardStrength));

  return sumWinnings(gamesSorted);
};

console.log(task1(data));
console.log(task2(data));
