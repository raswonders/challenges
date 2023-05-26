function binarray(a) {
  const balanceSheet = {0: -1};
  let balance = 0
  let maxlen = 0;
  for (let i=0; i < a.length; i++) {
    if (a[i] === 1) balance++;
    else balance--;
    if (balance in balanceSheet) {
      const len = i - balanceSheet[balance];
      maxlen = len > maxlen ? len : maxlen;
    } else {
      balanceSheet[balance] = i;
    }
  }
  return maxlen;
}

// EXAMPLES
console.log(binarray([1,1,0,1,1,0,1,1]))
// 4