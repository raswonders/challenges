function uniquePaths(rows, cols, memo = {}) {
  if (rows === 1 && cols === 1) return 1;
  if (rows < 1 || cols < 1) return 0;
  if (!memo[`${rows},${cols}`]) {
    return (
      uniquePaths(rows - 1, cols, memo) + uniquePaths(rows, cols - 1, memo)
    );
  }

  return memo[`${rows},${cols}`];
}

assert(uniquePaths(1, 1) === 1, "should be one");
assert(uniquePaths(2, 2) === 2, "should be two");

console.log(uniquePaths(2, 3));
