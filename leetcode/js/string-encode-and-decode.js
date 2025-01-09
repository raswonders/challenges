class Solution {
  encode(strs) {
    let result = "";
    for (let str of strs) {
      result += String(str.length) + "#" + str;
    } 
    return result; 
  }

  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      let j = i; 
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.slice(i, j))
      let word = str.slice(j + 1, j + 1 + length);
      result.push(word);
      i = j + 1 + length;
    }
    return result;
  }
}

let arr1 = [ "neet", "code", "love", "you" ]
let solution = new Solution(); 
console.log(solution.decode(solution.encode(arr1)));
