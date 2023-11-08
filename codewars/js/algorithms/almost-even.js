function splitInteger(num, parts) {
  const remainder = num % parts;
  const divider = Math.floor(num / parts);

  return [
    ...new Array(parts - remainder).fill(divider),
    ...new Array(remainder).fill(divider + 1)
  ];
}


// [5,5,5]
console.log(splitInteger(15, 3));

// [6,7,7]
console.log(splitInteger(20, 3));

