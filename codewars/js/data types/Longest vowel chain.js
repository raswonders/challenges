const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function(){
  it("Test", () => {
    assert.strictEqual(solve("codewarriors"),2);
    assert.strictEqual(solve("suoidea"),3);
    assert.strictEqual(solve("ultrarevolutionariees"),3);
    assert.strictEqual(solve("strengthlessnesses"),1);
    assert.strictEqual(solve("cuboideonavicuare"),2);
    assert.strictEqual(solve("chrononhotonthuooaos"),5);
    assert.strictEqual(solve("iiihoovaeaaaoougjyaw"),8);
  })
});


function solve(inputStr){
  let max = 0;
  let substrLen = 0;
  for (let i = 0; i < inputStr.length; i++) {
    if ("aeiou".includes(inputStr[i])) substrLen++;
    else substrLen = 0;

    max = substrLen > max ? substrLen : max;
  }

  return max;
}