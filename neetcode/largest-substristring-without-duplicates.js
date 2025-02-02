// brute force O(N^2 * M)
// function lengthOfLongestSubstring(str) {
//   let max = 0;
//   for (let start = 0; start < str.length; start++) {
//     for (let end = start + 1; end <= str.length; end++) {
//       const subStr = str.slice(start, end);
//       if (!hasDuplicates(subStr)) {
//         if (subStr.length > max) {
//           max = subStr.length;
//         }
//       }
//     }
//   }

//   function hasDuplicates(str) {
//     let chars = new Set(str);
//     return str.length !== chars.size;
//   }
// }

// sliding window O(N) memory O(N)
function lengthOfLongestSubstring(str) {
  let substring = new Set();
  let l = 0;
  let r = 0;
  let max = 0;
  while (r < str.length) {
    let last = str[r];
    while (substring.has(last)) {
      let first = str[l];
      substring.delete(first);
      l += 1;
    }
    substring.add(last);
    max = Math.max(max, substring.size) 
    r++;
  }
  return max;
}

// 3
console.log(lengthOfLongestSubstring("zxyzxyz"));

// 1
console.log(lengthOfLongestSubstring("xxxx"));

// 1
console.log(lengthOfLongestSubstring(" "));

// 3
console.log(lengthOfLongestSubstring("dvdf"));
