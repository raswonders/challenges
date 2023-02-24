function perfectSquare(str){
  const isInvalid = str.search(/[^\n.]/) !== -1;
  if (isInvalid) return false;

  let rows = str.split('\n');
  let isEveryRowEqual = rows.every(row => rows[0].length === row.length);
  let isWidthEqualHeight = rows[0].length === rows.length;
 
  return isEveryRowEqual && isWidthEqualHeight;
}

console.log(perfectSquare("..\n.."));
// true

console.log(perfectSquare("...\n...\n..."));
// true

console.log(perfectSquare("...\n,..\n..."));
// false

console.log(perfectSquare(",,,\n,,,\n,,,"));
// false

