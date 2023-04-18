function isPalindrome(phrase) {
  const alphaNumeric = phrase
    .toLowerCase()
    .split("")
    .map((item) => {
      const charCode = item.charCodeAt(0);
      const isAlnum =
        (charCode >= 97 && charCode <= 122) ||
        (charCode >= 48 && charCode <= 57);
      return isAlnum ? item : "";
    })
    .join("");

  for (let i = 0, j = alphaNumeric.length - 1; j > i; i++, j--) {
    if (alphaNumeric[i] !== alphaNumeric[j]) return false;
  }

  return true;
}

// Examples
console.log(isPalindrome(""));
// true

console.log(isPalindrome("a"));
// true

console.log(isPalindrome("ab"));
// false

console.log(isPalindrome("A, a"));
// true

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// true
