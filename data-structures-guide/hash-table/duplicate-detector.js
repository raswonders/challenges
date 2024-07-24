// Write a function that accepts an array of strings and returns the first
// duplicate value it finds. For example, if the array is ["a", "b", "c", "d", "c", "e",
// "f"], the function should return "c", since it’s duplicated within the array.
// (You can assume that there’s one pair of duplicates within the array.)
// Make sure the function has an efficiency of O(N).

// // input array of strings
// // output first duplicate detected / null otherwise

function getFirstDup(arr) {
  strIndex = {};

  for (let i = 0; i < arr.length; i++) {
    if (strIndex[arr[i]]) {
      return arr[i];
    }

    strIndex[arr[i]] = true;
  }

  return null;
}

console.log(getFirstDup(["a"]));
// prints null

console.log(getFirstDup(["a", "a"]));
// returns "a"

console.log(getFirstDup(["a", "b", "a", "b"]));
// returns "a"
