function uniquePaths(rows, cols) {
  if (rows === 1 && cols === 1) return 1;
  if (rows < 1 || cols < 1) return 0;

  return uniquePaths(rows - 1, cols) + uniquePaths(rows, cols - 1);
}

assert(uniquePaths(1, 1) === 1, "should be one");
assert(uniquePaths(2, 2) === 2, "should be two");

console.log(uniquePaths(2, 3));
