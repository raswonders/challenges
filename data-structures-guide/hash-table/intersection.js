// Write a function that returns the intersection of two arrays. The intersection is a third array that contains all values contained within the first two
// arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4].
// Your function should have a complexity of O(N). (If your programming
// language has a built-in way of doing this, don’t use it. The idea is to build
// the algorithm yourself.)

function intersection(a, b) {
  const dict = {};
  const result = [];

  for (item of a) {
    dict[item] = true;
  }

  for (item of b) {
    if (dict[item]) result.push(item);
  }

  return result;
}

module.exports = intersection;
