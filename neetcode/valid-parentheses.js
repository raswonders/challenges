const openingBrackets = ["(", "[", "{"];
const closingBrackets = [")", "]", "}"];
const bracketMap = {
  "(": ")",
  "[": "]",
  "{": "}",
}

class Solution {
  isValid(input) {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        const lastOpenning = stack.pop();
        if (!lastOpenning || bracketMap[lastOpenning] !== char) {
          return false;
        }
      }
    }

    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const sol = new Solution();
// true
console.log(sol.isValid("[]"))

// true
console.log(sol.isValid("{[()]}"))

// true 
console.log(sol.isValid("{[]}"))

// false
console.log(sol.isValid("{[)]}"))

// false 
console.log(sol.isValid("{[(]}"))

