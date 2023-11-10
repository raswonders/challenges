function solve(s){
  let substrings = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      if (i + j > s.length) break;
      substrings.push(s.substring(i, i + j))
    }
  }

  let oddDigits = ['1', '3', '5', '7', '9'];
  return substrings.filter(val => oddDigits.includes(val[val.length - 1])).length;
};

module.exports = solve;

