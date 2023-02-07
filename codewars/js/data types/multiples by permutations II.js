function findLowestInt(k) {
  let n = 1;
  while (n++) {
    let strA = ((k)   * n).toString();
    let strB = ((k+1) * n).toString();
    if (arePermutations(strA, strB)) break;
  }
  
  return n;
}

function arePermutations(strA, strB) {
  if (strA === strB || strA.length !== strB.length) return false;
  
  sortedA = strA.split('').sort().join('');
  sortedB = strB.split('').sort().join('');
  
  return sortedA === sortedB;
}