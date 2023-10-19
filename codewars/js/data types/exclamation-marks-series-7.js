function hasSingleExclamationMark(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "!") count++;
  }

  return count === 1 ? true : false;
}

function remove(string) {
  const correctWords = string.split(" ").filter(str => !hasSingleExclamationMark(str))
  return correctWords.join(" ");
}

// ""
console.log(remove("Hi!"));

// "Hi!!"
console.log(remove("Hi! Hi!!"));

// ""
console.log(remove("Hi! !Hi Hi!"));

// "Hi!! !!Hi"
console.log(remove("Hi! Hi!! !!Hi"));

