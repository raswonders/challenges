function stepDown(stair, width){
  if (width === 0) return [];
  
  return stair < 0 ? [] : stepDown(stair - width, width).concat(stair);
}


console.log(stepDown(10, 1))
// [0,1,2,3,4,5,6,7,8,9,10]