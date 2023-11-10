const solve = require('./non-even-substrings');

describe('solve', () => {
  test('returns the number of odd substrings', () => {
    expect(solve('123')).toBe(4);
    expect(solve('13579')).toBe(15);
    expect(solve('2468')).toBe(0);
    expect(solve('')).toBe(0);
    expect(solve('111')).toBe(6);
  });
});