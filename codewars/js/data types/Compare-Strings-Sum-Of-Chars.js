function isAlpha(s) {
  return /^[a-zA-Z]+$/.test(s);
}

function getCodePointSum(s) {
  let arr = (s === null || !isAlpha(s)) ? [] : s.toUpperCase().split("");
  return arr.reduce((acc, curr) => acc + curr.codePointAt(0), 0)
}

function compare(s1, s2) {
  return getCodePointSum(s1) === getCodePointSum(s2);
}