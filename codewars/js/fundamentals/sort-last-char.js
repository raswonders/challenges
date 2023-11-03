function last(str){
  return str.split(" ").sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

// []
console.log(last(""));

// ["eva"]
console.log(last("eva"));

// ["eva", "is"]
console.log(last("is eva"));
