const chai = require("chai");
const assert = chai.assert;

describe("Basic tests", function () {
  it("should return 695 for 'gh12cdy695m1'", function () {
    assert.strictEqual(solve('gh12cdy695m1'), 695);
  });

  it("should return 9 for '2ti9iei7qhr5'", function () {
    assert.strictEqual(solve('2ti9iei7qhr5'), 9);
  });

  it("should return 61 for 'vih61w8oohj5'", function () {
    assert.strictEqual(solve('vih61w8oohj5'), 61);
  });

  it("should return 42 for 'f7g42g16hcu5'", function () {
    assert.strictEqual(solve('f7g42g16hcu5'), 42);
  });

  it("should return 85 for 'lu1j8qbbb85'", function () {
    assert.strictEqual(solve('lu1j8qbbb85'), 85);
  });
});


function solve(inputStr) {
  let nums = inputStr.match(/\d+/g);
  return Math.max(...nums);
}