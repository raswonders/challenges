function highestRank(arr){
  const memory = {};
  
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    memory[num] = memory[num] ? memory[num] + 1 : 1;
  }

  const ranks = Object.entries(memory).map(tuple => [+tuple[0], +tuple[1]]);
  highest = ranks[0];
 
  for (let rank of ranks) {
    if (rank[1] > highest[1]) highest = rank;
    else if (rank[1] === highest[1] && rank[0] > highest[0]) highest = rank;
  }

  return highest[0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])) // 12