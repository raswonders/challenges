function slicesToName(n) {
  if (typeof n !== "number") return null;
  if (n <= 1) return null;

  let breadPart = (n % 2 === 1 ? "bread" : "");
  let sandwichPart = new Array(Math.floor(n / 2))
    .fill("sandwich")
    .join(" ");

  return breadPart ? breadPart + " " + sandwichPart : sandwichPart;
}

function nameToSlices(name) {
  if (typeof name !== "string" || name === "" || name === "bread") return null;

  let nameArr = name.split(" ");
  let slices = 0;
  for (let i = 0; i < nameArr.length; i++) {
    if (nameArr[i] !== "bread" && nameArr[i] !== "sandwich") return null;
    if (nameArr[i] === "bread" && i !== 0) return null;
    slices += (nameArr[i] === "sandwich" ? 2 : 1);
  }

  return slices ? slices : null;
}

// null
console.log(slicesToName(false));

// null
console.log(slicesToName(1));

// null
console.log(slicesToName(-1));

// sandwich
console.log(slicesToName(2));

// bread sandwich
console.log(slicesToName(3));

// sandwich sandwich sandwich sandwich
console.log(slicesToName(8));

// null
console.log(nameToSlices(12));

// null
console.log(nameToSlices(""));

// null
console.log(nameToSlices("bread"));

// null
console.log(nameToSlices("sandwich sandwich bread sandwich"));

// 2
console.log(nameToSlices("sandwich"));

// 3
console.log(nameToSlices("bread sandwich"));

// 8
console.log(nameToSlices("sandwich sandwich sandwich sandwich"));
