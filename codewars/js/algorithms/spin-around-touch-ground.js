function spinAround(turns) {
  let angle = turns.reduce((acc, curr) => {
    if (curr === "right") acc += 90;
    if (curr === "left") acc += -90;
    return acc;
  }, 0)

  return Math.floor(Math.abs(angle) / 360);
}

// 0
console.log(spinAround(["left"]));

// 0
console.log(spinAround(["left", "left", "left", "right", "left"]));

// 0
console.log(spinAround(["left", "left", "left", "left", "right"]));

// 1
console.log(spinAround(["left", "left", "left", "left"]));

// 2
console.log(spinAround(["left", "left", "left", "left", "right", "left", "left", "left", "left", "left"]));
