// Write a function that returns the first non-duplicated character in a string.
// For example, the string, "minimum" has two characters that only exist
// once—the "n" and the "u", so your function should return the "n", since it
// occurs first. The function should have an efficiency of O(N).

function getFirstNonDup(str) {
  const charIndex = new Map();

  for (let char of str) {
    if (charIndex.has(char)) {
      charIndex.set(char, charIndex.get(char) + 1);
    } else {
      charIndex.set(char, 1);
    }
  }

  for (let char of str) {
    if (charIndex.get(char) === 1) return char;
  }

  return null;
}

console.log(getFirstNonDup("abcd"));
// returns "a"

console.log(getFirstNonDup("ababcde"));
// returns "c"

console.log(getFirstNonDup("aabbcc"));
// returns null

console.log(getFirstNonDup(""));
// returns null
