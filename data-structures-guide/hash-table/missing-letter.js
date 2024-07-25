// TODO
// Write a function that accepts a string that contains all the letters of the
// alphabet except one and returns the missing letter. For example, the string,
// "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet
// except the letter, "f". The function should have a time complexity of O(N).
let alpha = "abcdefghijklmnopqrstuvxywz";

function missingLetter(str) {
  let alphaIndex = new Map();
  for (let letter of alpha) {
    alphaIndex.set(letter, false);
  }

  for (let letter of str) {
    alphaIndex.set(letter, true);
  }

  alphaPairs = [...alphaIndex];
  return alphaPairs.filter((pair) => !pair[1])[0][0];
}

console.log(missingLetter("abcdefghijklmnopqrstuxywz"));
// returns "v"

console.log(missingLetter("abcdefghi jklmnopqr stuxywz"));
// returns "v"

console.log(missingLetter("abcd abcd a efghijklmnopqrstuxywz"));
// returns "v"
