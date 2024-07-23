
const intersection = require("./intersection");

describe("intersection function tests", () => {
  test("two arrays with unique elements", () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test("two arrays with duplicates", () => {
    expect(intersection([1, 2, 2], [3, 2, 2])).toEqual([2, 2]);
  });

  test("two arrays with no overlaping elements", () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });
});

