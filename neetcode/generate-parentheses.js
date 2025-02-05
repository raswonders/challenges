// O(2^N)
function generateStrings(n) {
  let chars = ["(", ")"];
  let strings = [""];
  for (let i = 0; i < 2 * n; i++) {
    const tempStrings = [];
    for (let s of strings) {
      for (let c of chars) {
        tempStrings.push(s + c);
      }
    }
    strings = tempStrings;
  }
  return strings;
}

// O(N)
function isWellFormed(str) {
  if (str % 2 === 1) {
    return false;
  }
  let opening = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "(") {
      opening++;
    } else if (char === ")") {
      if (opening <= 0) {
        return false;
      } else {
        opening--;
      }
    }
  }

  if (opening > 0) {
    return false;
  } else {
    return true;
  }
}

function generateParenthesisBrute(n) {
  return generateStrings(n).filter(str => isWellFormed(str));
}

function generateParenthesis(n) {
  const solutions = [];

  backtrack(0, 0, "");
  function backtrack(open, closed, str) {
    if (open < closed) {
      return;
    }

    if (open > n || closed > n) {
      return;
    }

    if (open === n && closed === n) {
      solutions.push(str);
    } else {
      backtrack(open + 1, closed, str + "(");
      backtrack(open, closed + 1, str + ")");
    }
  }
  
  return solutions;
}

// ['((()))', '(()())', '(())()', '()(())', '()()()']
console.log("brute force:", generateParenthesis(3));
console.log("backtracking:", generateParenthesis(3));