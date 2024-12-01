function addUntil100(array) {
  if (array.length === 0) return 0;

  let rest = addUntil100(array.slice(1));
  if (array[0] + rest > 100) {
    return rest;
  } else {
    return array[0] + rest;
  }
}
