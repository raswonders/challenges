// Space complexity O(1)
function reverse(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let j = array.length - 1 - i;
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

console.log(reverse([1, 2, 3, 4, 5]));
