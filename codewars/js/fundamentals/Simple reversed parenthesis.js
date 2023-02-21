function solve(str){
  let reversals = 0;
  let [leftUnbalanced, rightUnbalanced] = countUnbalanced(str);
  reversals += Math.floor(leftUnbalanced / 2);
  leftUnbalanced %= 2;
  reversals += Math.floor(rightUnbalanced / 2);
  rightUnbalanced %= 2;

  return leftUnbalanced - rightUnbalanced === 0 
          ? reversals + leftUnbalanced * 2
          : -1;
}

function countUnbalanced(str) {
  let left = 0
  let right = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c === '(') left++;
    if (c === ')') left ? left-- : right++; 
  }
  return [left, right];
}

console.log(solve(")()("));
// 2
console.log(solve("((()"));
// 1
console.log(solve("((("));
// -1
console.log(solve("())((("));
// 3
console.log(solve("())()))))()()("));
// 4



