function byteToSet (byte) {
  let bits = byte.toString(2).padStart(8,0);
  let result = new Set();

  bits.split("").forEach((val, index) => {
    if (val === "1") result.add(index); 
  })

  return result;
}

console.log(byteToSet(255)) // {6, 7}