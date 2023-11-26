function sortme(names) {

  const ignoreCaseComp = (a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    for (let i = 0; i < a.length && i < b.length; i++) {
      let alphaDiff = a.charCodeAt(i) - b.charCodeAt(i);
      if (alphaDiff === 0) continue;
      else return alphaDiff;
    }

    // short word first 
    return a.length - b.length; 
  }

  return names.sort(ignoreCaseComp);
}

console.log(sortme(["C", "d", "a", "B"]))// ["a", "B", "C", "d"]