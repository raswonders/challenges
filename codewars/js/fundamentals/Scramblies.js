function scramble(str1, str2) {
  let letters = str1.split("");
  let word = str2.split("");
  for (l of letters) {
    console.log(l, word)
    if (word.length === 0) return true;
    let foundAt = word.indexOf(l);
    if (foundAt !== -1) {
      word.splice(foundAt, 1);
    }
  }
  return word.length > 0 ? false : true;
}

// Examples
console.log(scramble("rkqodlw", "world"));
// true
console.log(scramble("kqodlw", ""));
// true
console.log(scramble("kqodlw", "world"));
// false