function maxProfix(prices) {
  return prices.reduce((acc, curr, currIn, arr) => {
    if (currIn === 0) return 0;
    let prev = arr[currIn - 1];
    let valueDelta = curr - prev;
    if (valueDelta > 0) acc += valueDelta;
    return acc;
  }, 0) 
}

console.log(maxProfix([7,1,5,3,6,4]))

console.log(maxProfix([1,2,3,4,5]))