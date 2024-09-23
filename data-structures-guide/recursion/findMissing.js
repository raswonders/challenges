function findMissing(array) {
  const sorted = array.sort((a, b) => a - b);

  for ([index, value] of sorted.entries()) {
    if (index !== value) return index;
  }

  return null;
}

console.log(findMissing([9, 3, 2, 5, 6, 7, 1, 0, 4]));
