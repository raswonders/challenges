const intersection = (arr1, arr2) => {
  let [bigger, smaller] =
    arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1];

 
  let hashTable = {};
  for (item of bigger) {
    hashTable[item] = true;
  }

  let common = [];
  for (item of smaller) {
    if (hashTable[item]) common.push(item);
  }

  return common;
};

const getDuplicate = (arr) => {
  const hashTable = {};
  
  for (item of arr) {
    if (hashTable[item]) return item;
    else hashTable[item] = true; 
  }
}

console.log(getDuplicate(["a", "b", "c", "d", "c"]))
