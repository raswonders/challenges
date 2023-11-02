function getScore(arr) {
  const baseScore = [0, 40, 100, 300, 1200];
  let linesTotal = 0;
  let scoreTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    let lines = arr[i];
    scoreTotal += baseScore[lines] + Math.floor(linesTotal / 10) * baseScore[lines];
    linesTotal += lines;
  }

  return scoreTotal;
}

// 0
console.log(getScore([]));

// 0
console.log(getScore([0, 0]));

// 40 + 100 +  300 + 1200 = 1640
console.log(getScore([0, 1, 2, 3, 4]));

// 0 + 40 + 40 + 300 + 0 + 100 + 40 + 100 = 500 + 120 = 620
console.log(getScore([0, 1, 1, 3, 0, 2, 1, 2]));

// 100 + 0 + 1200 + 100 + 100 + 300 + 300 + 0 + 0 + 600 + 600 = 3300
console.log(getScore([2, 0, 4, 2, 2, 3, 0, 0, 3, 3]));
