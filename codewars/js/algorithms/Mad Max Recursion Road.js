function max(arr) {
  if (arr.length === 0) {
    return -Infinity;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  restMax = max(arr.slice(1));

  return arr[0] > restMax
          ? arr[0]
          : restMax;
}

console.log(max([1,2,3,4,5]));
console.log(max([]));
console.log(max([99,2,100,4,5]));