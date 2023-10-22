const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("mispelled", () => {
  it("Sample Tests", () => {
    assert.strictEqual(mispelled("versed", "xersed"), true);
    assert.strictEqual(mispelled("versed", "applb"), false);

    assert.strictEqual(mispelled("versed", "v5rsed"), true);
    assert.strictEqual(mispelled("1versed", "versed"), true);
    assert.strictEqual(mispelled("versed", "versed1"), true);

    assert.strictEqual(mispelled("versed", "aversed"), true);
    assert.strictEqual(mispelled("aaversed", "versed"), false);
    assert.strictEqual(mispelled("versed", "aaversed"), false);
  });
});


function mispelled(word1, word2) {
  if (word1.length === word2.length) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
      diff += word1[i] !== word2[i] ? 1 : 0;
    }

    return diff <= 1;
  }

  if (Math.abs(word1.length - word2.length) === 1) {
    return (word1.includes(word2) || word2.includes(word1));
  }

  return false;
}



