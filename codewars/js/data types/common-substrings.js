function createSubstrings(str, minlen) {
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + minlen; j <= str.length; j++) {
      substrings.push(str.slice(i, j))
    }
  }

  return substrings.map(str => str.toLowerCase());
}

function SubstringTest(str1, str2) {
  let substrArr1 = createSubstrings(str1, 2);
  let substrArr2 = createSubstrings(str2, 2);

  for (let i = 0; i < substrArr1.length; i++) {
    if (substrArr2.includes(substrArr1[i])) return true;
  }

  return false;
}


// true
console.log(SubstringTest("ahoj", "holla"));

// false
console.log(SubstringTest("ah", "hey"));

// false
console.log(SubstringTest("", "holla"));

// false
console.log(SubstringTest("", ""));