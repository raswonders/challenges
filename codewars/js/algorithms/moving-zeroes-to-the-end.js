function moveZeros(arr) {
  let nonzeroes = arr.filter(elem => elem !== 0);
  let zeroes = Array(arr.length - nonzeroes.length).fill(0)

  return [...nonzeroes, ...zeroes];
}

// EXAMPLES
console.log(moveZeros(['a', 3,2,0,1,0,false, 0, 2])) // ['a', 3, 2, 1, false, 2, 0, 0, 0]
console.log(moveZeros([])) // []
console.log(moveZeros([0,0,0,0])) // [0,0,0,0]