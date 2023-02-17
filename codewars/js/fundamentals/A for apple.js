function a(n) {
  if (n < 4) return "";
  if (n % 2 === 1) return a(n - 1);
  
  let rows = [];
  let rowLength = 2 * n - 1;
  let midIndex = Math.floor(rowLength / 2)
  let leftA = midIndex, rightA = midIndex;
  for (let i = 0; i < n; i++) {
    let row = Array(rowLength).fill(" ");
    let isMidline = i === n / 2;
    
    row[leftA] = 'A';
    row[rightA] = 'A';
    if (isMidline) {
      for (j = leftA; j < rightA; j += 2) {
        row[j] = 'A';
      }
    }
    
    leftA--;
    rightA++;
    rows.push(row.join(''))
  } 
  
  return rows.join('\n');
}

console.log(a(7));