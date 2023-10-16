const chai = require('chai');
const assert = chai.assert;

function getMiddle(str) {
  const len = str.length;

  if ( len % 2 === 0 ) {
    let mid = Math.floor(len / 2) - 1;
    return str.slice(mid, mid + 2);
  } else {
    let mid = Math.floor(len / 2);
    return str.slice(mid, mid + 1);
  }
}
describe("GetMiddle", function() {
  it("Tests", function() {
    assert.equal(getMiddle("test"), "es");
    assert.equal(getMiddle("testing"), "t");
    assert.equal(getMiddle("middle"), "dd");
    assert.equal(getMiddle("A"), "A");
  });
});


