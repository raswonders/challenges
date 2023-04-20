function longestCommonPrefix(strs) {
  let i = 0;
  let prefix = "";
  while(true) {
    if (strs[0].length <= i) return prefix;
    let candidate = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].length <= i) return prefix; 
      if (candidate !== strs[j][i]) return prefix;
    }
    prefix += candidate; 
    i++;
  }
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
// fl
console.log(longestCommonPrefix(["dog","racecar","car"]))
// ""