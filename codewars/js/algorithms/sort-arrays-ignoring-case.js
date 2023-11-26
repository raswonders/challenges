function sortme(names) {

  const ignoreCaseComp = (a, b) => {
    return a.localeCompare(b, {sensitivity: "accent"});
  }

  return names.sort(ignoreCaseComp);
}

console.log(sortme(["C", "d", "a", "B"]))// ["a", "B", "C", "d"]