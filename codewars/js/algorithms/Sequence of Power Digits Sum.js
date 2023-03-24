function sumPowDigSeq(last, n, k, numbersSeen=[], cycle=[]) {
  if (k === 0) {
    return [k, cycle, cycle.length, last];
  }

  let cycleStartsAt = numbersSeen.indexOf(last);
  if (cycleStartsAt !== -1) {
    cycle = numbersSeen.slice(cycleStartsAt);
    last = cycle[k % cycle.length]
    return [cycleStartsAt, cycle, cycle.length, last];
  }

  numbersSeen.push(last);
  let next = last
              .toString()
              .split("")
              .reduce((acc, digit) => {
                return acc + Math.pow(Number(digit), n)
              }, 0)

  return sumPowDigSeq(next, n, k - 1, numbersSeen, cycle);
}

console.log(sumPowDigSeq(420, 3, 5))
// [3, [153], 1, 153]);

