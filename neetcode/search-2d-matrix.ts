import { test, expect } from "bun:test";

function search(matrix: number[][], target: number) {
  if (matrix.length === 0) {
    return false;
  }

  let rowSize = matrix[0].length;
  let l = 0;
  let r = matrix.length * rowSize - 1;

  while (l <= r) {
    let mid = l + Math.floor(Math.abs(l - r) / 2);
    let col = mid % rowSize;
    let row = Math.floor(mid / rowSize);
    if (target === matrix[row][col]) {
      return true;
    } else if (target < matrix[row][col]) {
      r = mid - 1;
    } else if (target > matrix[row][col]) {
      l = mid + 1;
    }
  }

  return false;
}

test("returns true when target is in matrix", () => {
  expect(
    search(
      [
        [1, 2, 4, 8],
        [10, 11, 12, 13],
        [14, 20, 30, 40],
      ],
      10,
    ),
  ).toBe(true);
});

test("returns false when target is NOT in matrix", () => {
  expect(
    search(
      [
        [1, 2, 4, 8],
        [10, 11, 12, 13],
        [14, 20, 30, 40],
      ],
      15,
    ),
  ).toBe(false);
});
