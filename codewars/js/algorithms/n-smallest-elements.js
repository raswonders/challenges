function firstNSmallest(array, n) {
  let arrayObj = array
    .map((value, index) => {
      return { value, index };
    })
    .sort((a, b) => {
      if (a.value === b.value) return a.index - b.index;
      return a.value - b.value
    });
  
  return arrayObj
    .slice(0, n)
    .sort((a, b) => a.index - b.index)
    .map((obj) => obj.value);
}

// EXAMPLES
console.log(firstNSmallest([1, 2, 3, 4, 5], 3)); // [1,2,3]
console.log(firstNSmallest([5, 4, 3, 2, 1], 3)); // [3,2,1]
console.log(firstNSmallest([], 3)); // []
console.log(firstNSmallest([1], 1)); // [1]
console.log(firstNSmallest([], 0)); // [];
console.log(firstNSmallest([-5, 3, -3, -2, -10, 0, -2, 1, 3, -6, 8, -6, 1], 11));

