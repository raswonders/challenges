// Use recursion to write a function that accepts an array of numbers and
// returns a new array containing just the even numbers.

function getEven(arr) {
  if (arr.length === 0) return [];
  return [...(arr[0] % 2 === 0 ? [arr[0]] : []), ...getEven(arr.slice(1))];
}

assert(getEven([1, 2, 3, 4, 5, 6, 8, 9]).length === 4, "it should be 4");
