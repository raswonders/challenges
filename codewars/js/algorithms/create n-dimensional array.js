function createNDimensionalArray(n, size, level=n) {
  return (n === 1) ? 
    new Array(size).fill(`level ${level}`) :
    new Array(size).fill(createNDimensionalArray(n - 1, size, level));
}

console.log(createNDimensionalArray(1, 2))
// ['level 1', 'level 1']

console.log(createNDimensionalArray(2, 3))
// [['level 2', 'level 2', 'level 2'], ['level 2', 'level 2', 'level 2'], ['level 2', 'level 2', 'level 2']]

console.log(createNDimensionalArray(3, 3))