function revrot(str, sz) {
  if (sz <= 0 || !str || sz > str.length) return "";

  const reverse = chunk => chunk.split("").reverse().join(""); 
  const rotate = chunk => chunk.slice(1) + chunk[0];
  const sumCubes = chunk => chunk.reduce((sum, digit) => sum += digit**3, 0);

  let result = "";

  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz);

    if (chunk.length < sz) continue;

    chunk = sumCubes % 2 
      ? rotate(chunk) 
      : reverse(chunk);

    result += chunk;
  }

  return result;
}

// EXAMPLES
console.log(revrot("123456987654", 6)); // "234561876549"
console.log(revrot("123456987654", 7)); // "234569187654"
console.log(revrot("", 5)); // ""
console.log(revrot("123456", 0)); // ""
console.log(revrot("123456", 10)); // ""
