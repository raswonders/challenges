const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(dadFilter("all this,,,, used to be trees,,,,,,"), "all this, used to be trees");
    assert.strictEqual(dadFilter("i,, don't believe this round earth,,, show me evadence!!"), "i, don't believe this round earth, show me evadence!!");
  });
});

function dadFilter(str){
  return str
          .trimEnd()
          .replace(/,+/g, ',')
          .replace(/,$/g, '')
}