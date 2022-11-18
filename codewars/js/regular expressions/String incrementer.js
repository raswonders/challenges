function incrementString(str) {
  let strInc = str.replace(/(0*)\d*$/, (digits, zeroes) => {
    let lastDigit = digits.slice(-1);
    
    if (lastDigit === "9" || lastDigit === "0") zeroes = zeroes.slice(0, -1);
    
    return zeroes + String(Number(digits) + 1);
  })
  
  return strInc === str ? strInc + "1" : strInc;
}