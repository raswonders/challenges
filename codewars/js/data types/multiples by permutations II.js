function findLowestInt(k) {
  for (let n = 1; ;n++) {
    let strA = ((k)   * n).toString();
    let strB = ((k+1) * n).toString();
    
    if (arePermutations(strA, strB)) return n;
  }
}

function arePermutations(strA, strB) {
  // they can't be permutations
  // if identical
  if (strA === strB) return false;
  // if no. of elements is different
  if (strA.length !== strB.length) return false;

  let arrA = strA.split('');
  let arrB = strB.split('');
  // every digit in arrA must be in arrB
  return arrA.every(digit => {
    let index = arrB.indexOf(digit);
    if (index === -1) return false;
    arrB.splice(index, 1);
    return true;
  })
}