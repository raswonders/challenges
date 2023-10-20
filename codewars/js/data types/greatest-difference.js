function diff(couples){
  let maxDiff = 0;
  let maxCouple;
  for (let i = 0; i < couples.length; i++) {
    let couple = couples[i].split("-");
    let difference = Math.abs(+couple[0] - +couple[1]);

    if (difference > maxDiff) {
      maxDiff = difference;
      maxCouple = couples[i];
    }
  }

  return maxDiff ? maxCouple : false;
}

// false
console.log(diff(['22-22', '13-13']));

// false
console.log(diff([]));

// false
console.log(diff(['22-22', '11-11']));

// '22-32'
console.log(diff(['22-32', '13-13']));

// '23-22'
console.log(diff(['32-22', '13-13']));

// '0-10000'
console.log(diff(['22-32', '0-10000']));

