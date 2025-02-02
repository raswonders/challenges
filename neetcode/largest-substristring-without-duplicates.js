// brute force O(N^2 * M)
function lengthOfLongestSubstring(str) {
  let max = 0;
  for (let start = 0; start < str.length; start++) {
    for (let end = start + 1; end <= str.length; end++) {
      const subStr = str.slice(start, end);
      if (!hasDuplicates(subStr)) {
        if (subStr.length > max) {
          max = subStr.length;
        }
      }
    }
  }

  function hasDuplicates(str) {
    let chars = new Set(str);
    return str.length !== chars.size;
  }
}

// 3
console.log(lengthOfLongestSubstring("zxyzxyz"));

// 1
console.log(lengthOfLongestSubstring("xxxx"));
