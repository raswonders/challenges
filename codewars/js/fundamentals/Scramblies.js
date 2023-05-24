function scramble(str1, str2) {
  let charMap = str1.split("").reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {});
  let wordChars = str2.split("");
  return wordChars.every((c) => --charMap[c] >= 0);
}

// Examples
console.log(scramble("rkqodlw", "world"));
// true
console.log(scramble("kqodlw", ""));
// true
console.log(scramble("kqodlw", "world"));
// false