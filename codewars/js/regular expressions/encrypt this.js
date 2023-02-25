function encryptThis(text) {
  return text
          .match(/\w+/g)
          .map(encryptWord)
          .join(" ");
}

function encryptWord(word) {
  let firstChar = word.length >= 1 ? word.slice(0, 1) : "";
  let secondChar = word.length >= 2 ? word.slice(1, 2) : "";
  let lastChar = word.length >= 2 ? word.slice(-1) : "";
 
  return firstChar.charCodeAt(0) + lastChar + word.slice(2, -1) + secondChar;
}

console.log(encryptThis("Hello"));
// 72olle
console.log(encryptThis("good"));
// 103doo
console.log(encryptThis("hello world"));
// 104olle 119drlo

