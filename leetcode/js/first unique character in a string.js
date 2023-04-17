function firstUniqChar(s) {
  for (let i = 0; i < s.length; i++) {
    const isNonRepeating = s.indexOf(s.charAt(i), s.indexOf(s.charAt(i)) + 1) === -1;
    if (isNonRepeating) return i;
  }
  return -1;
}



// EXAMPLES
console.log(firstUniqChar("leetcode"));
// 0

console.log(firstUniqChar("aabb"));
// -1 

console.log(firstUniqChar("aaaaaabbbb"));
// -1

console.log(firstUniqChar("loveleetcode"));
// 2