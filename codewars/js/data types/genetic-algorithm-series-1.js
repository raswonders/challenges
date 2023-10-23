function generate(len) {
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(Math.round(Math.random()));
  }

  return result.join("");
}

// random 4-size string
console.log(generate(4));

// empty string
console.log(generate(0));

