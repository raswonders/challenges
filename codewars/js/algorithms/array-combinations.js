function solve(arr) {
  return arr
    .map(arr => new Set(arr).size)
    .reduce((acc, curr) => {
      acc *= curr;
      return acc;
    });
}

// 0
console.log(solve([[]]));

// 1
console.log(solve([[1]]));

// 1
console.log(solve([[1, 1]]));

// 1
console.log(solve([[1, 1], [2]]));

// 2
console.log(solve([[1, 1], [2, 3]]));


