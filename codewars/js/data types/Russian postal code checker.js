const chai = require('chai');
const expect = chai.expect;

describe("Tests", () => {
  it("should validate ZIP codes", () => {
    expect(zipvalidate('198328')).to.be.true;
    expect(zipvalidate('310003')).to.be.true;
    expect(zipvalidate('424000')).to.be.true;

    expect(zipvalidate('12A483')).to.be.false;
    expect(zipvalidate('1@63')).to.be.false;
    expect(zipvalidate('111')).to.be.false;
    expect(zipvalidate('056879')).to.be.false;
    expect(zipvalidate('1111111')).to.be.false;
  });
});

function zipvalidate(postcode){
  if (postcode.length !== 6) return false;
  if ('05789'.includes(postcode[0])) return false;
  for (let letter of postcode) {
    if (isNaN(parseInt(letter)))  return false;
  }

  return true;
}