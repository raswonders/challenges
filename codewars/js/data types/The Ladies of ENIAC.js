const chai = require('chai');
const expect = chai.expect;

describe("Basic tests", () => {
  it("should return 'KAY MCNULTY!' for the first input", () => {
    const result = radLadies("k?%35a&&/y@@@£5599 m93753&$$$c$n///79u??@@%l?975$t?%5y%&$3$1!");
    expect(result).to.equal('KAY MCNULTY!');
  });

  it("should return 'MARLYN WESCOFF!' for the second input", () => {
    const result = radLadies("9?9?9?m335%$£@a791%&$r$$$l£@53$&y&n%$5@ $£5577w&7e931%s$£c$o%%%f351f??%!%%");
    expect(result).to.equal('MARLYN WESCOFF!');
  });

  it("should return 'FRAN BILAS!' for the third input", () => {
    const result = radLadies("%&$557f953//1/$£@%r%935$$£a@£3111$@???%n???5 $%157b%///$i%55&31£@l?%&$$a%@£$s5757!$$%%%%53");
    expect(result).to.equal('FRAN BILAS!');
  });

  it("should return 'RUTH LICHTERMAN!' for the fourth input", () => {
    const result = radLadies("///$%&£$553791£r357%??@$%u?$%@7993111£@$%t£$h3% 3$£l$311i3%@?&c3£h%&t&&?%11e%$?@11957r79%£&£m$$a55n1!111%%");
    expect(result).to.equal('RUTH LICHTERMAN!');
  });

  it("should return 'ADELE GOLDSTINE!' for the fifth input", () => {
    const result = radLadies("??£@%&a5d15??e599713%l%%e%75913 1£$%&@g@£%o&$@13l5d11s$%&t15i9n&5%%@%e@£$!£%$£");
    expect(result).to.equal('ADELE GOLDSTINE!');
  });
});

function radLadies(inputStr) {
  return inputStr.replace(/[^a-z!\s]+/ig, "").toUpperCase();
}