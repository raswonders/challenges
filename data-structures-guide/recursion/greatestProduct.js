// Given an array of positive numbers, write a function that returns the
// greatest product of any three numbers. The approach of using three
// nested loops would clock in at O(N3
// ), which is very slow. Use sorting to
// implement the function in a way that it computes at O(N log N) speed.
// (Some other implementations are even faster, but we’re focusing on using
// sorting as a technique to make code faster.)


function greatestProduct(arr) {
  const arrSorted = arr.sort((a,b) => a - b);
  return arrSorted.slice(-3).reduce((acc, prev) => acc *= prev)
}

let arr1 = [1,2,3];
let arr2 = [5,4,3,2,1];
let arr3 = [6,5,4,3,2,1];

console.log(greatestProduct(arr1))
console.log(greatestProduct(arr2))
console.log(greatestProduct(arr3))