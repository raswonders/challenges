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

function isAlnum(char) {
  let code = char.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    return true;
  }
  if (code >= 65 && code <= 90) {
    return true;
  }
  if (code >= 48 && code <= 57) {
    return true;
  }
  return false;
}

// Two pointer solution - O(1) of extra memory
function isPalindrome2(phrase) {
  let i = 0;
  let j = phrase.length - 1;
  while (i < j) {
    while (!isAlnum(phrase[i]) && i < j) {
      i++;
    }
    while (!isAlnum(phrase[j]) && i < j) {
      j--;
    }
    if (phrase[i].toLowerCase() !== phrase[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }
  return true;
}

// Examples
console.log(isPalindrome2(""));
// true

console.log(isPalindrome2("a"));
// true

console.log(isPalindrome2("ab"));
// false

console.log(isPalindrome2("A, a"));
// true

console.log(isPalindrome2("A man, a plan, a canal: Panama"));
// true
