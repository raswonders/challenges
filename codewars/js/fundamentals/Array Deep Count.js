function deepCount(arr) {
  if (arr.length === 0) return 0;
 
  return Array.isArray(arr[0]) ?
    1 + deepCount(arr.slice(1)) + deepCount(arr[0]) :
    1 + deepCount(arr.slice(1));
}

console.log(deepCount([1, 2, [3, 4, [5]]]));
// 7