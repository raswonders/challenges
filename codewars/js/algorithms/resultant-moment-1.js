function rotPred(arr){
  let mid = arr.indexOf("S");
  if (arr.slice(0, mid).length !== arr.slice(mid + 1).length) return "Not a Valid Entry"

  let totalMoment = arr.reduce((acc, curr, index, arr) => {
    let distance = index - Math.floor(arr.length / 2);
    return (curr === "S")
      ? acc
      : acc + curr * distance;
  }, 0 )

  if (totalMoment === 0) return "steady";
  if (totalMoment > 0) return "clockwise";
  if (totalMoment < 0) return "anti clockwise";
}

// steady
console.log(rotPred([2, -3, 1, 2, 'S', 3, -4, 0, 2]));

// anti clockwise
console.log(rotPred([2, -3, 1, 2, 'S', 3, -4, -5, 2]));

// clockwise
console.log(rotPred([2, -5, 1, 2, 'S', 3, -4, 0, 2]))

// Not a Valid Entry
console.log(rotPred([2, 1, 2, 'S', 3, -4, 0, 2]))

// Not a Valid Entry
console.log(rotPred([2, -3, 1, 2, 'S', 3, -4, -5]));