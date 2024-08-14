const assert = require("assert");

function findX(str, index = 0) {
  if (str.length <= 0) {
    return null;
  }

  return str[0] === "x" ? index : findX(str.slice(1), index + 1);
}

assert(findX("abcdefghijklmnopqrstuvwxyz") === 23, "should be 23");
