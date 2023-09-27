function solution(pairs){
  return Object.entries(pairs).map(tuple => `${tuple[0]} = ${tuple[1]}`).join()
}