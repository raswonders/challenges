function countIslands(image){
  let result = 0;
  const directions = [[0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1]];

  const checkAround = (i, j) => {
    if (image[i] && image[i][j]) image[i][j] = 0; else return;
    directions.forEach((dir) => {
      checkAround(i + dir[0], j + dir[1]);
    })
  };
  
  image.forEach((row, i) => {
     row.forEach((el, j) => {
       if (el) {
         result++;
         checkAround(i, j);
       }
     });
  });
  
  return result;
}