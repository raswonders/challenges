// Use recursion to write a function that accepts an array of strings and
// returns the total number of characters across all the strings. For example,
// if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there
// are 10 characters in total.

function countChars(arr) {
  if (arr.length === 0) return 0;
  return arr[0].length + countChars(arr.slice(1));
}

assert(countChars(["ab", "c", "def", "ghij"]) === 10, "should be 1");
