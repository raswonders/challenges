function dropWhile(arr, pred) {
  let startPos = 0;
  while(pred(arr[startPos]) && startPos < arr.length) {
    startPos++;
  }
  return arr.slice(startPos)
}

console.log(dropWhile([2,6,4,10,1,5,4,3]))
// [1,5,4,3]