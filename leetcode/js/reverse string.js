// Solution using built-in reverse method
function reverseString(s) {
  s.reverse();
}

// Solution using for loop and two indices going opossite direction
function reverseString(s) {
  for (let i = 0, j = s.length - 1; i < s.length && i < j; i++, j--) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
}


let word = ["h","e","l","l","o"];
reverseString(word)
console.log(word)
