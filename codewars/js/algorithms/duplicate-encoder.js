function isDuplicate(str, char) {
  return str.indexOf(char) !== str.lastIndexOf(char);
}

function duplicateEncode(word) {
  let wordLowered = word.toLowerCase();

  return wordLowered
    .split("")
    .map(letter => {
      return isDuplicate(wordLowered, letter) ? ")" : "(";
    })
    .join("");
}

//
console.log(duplicateEncode(""));

// (
console.log(duplicateEncode("a"));

// ((
console.log(duplicateEncode("ab"));

// ))(
console.log(duplicateEncode("aAb"));

// ))))
console.log(duplicateEncode("abAB"));
