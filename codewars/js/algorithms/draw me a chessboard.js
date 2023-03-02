function chessBoard(rows, columns) {
  let board = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      place = i % 2 === 0 
                ? (j % 2 === 0 ? 'O' : 'X')
                : (j % 2 === 0 ? 'X' : 'O');
      row.push(place);
    }
    board.push(row);
  }
  return board;
}

console.log(chessBoard(6,4))
// [
//   ["O","X","O","X"],
//   ["X","O","X","O"],
//   ["O","X","O","X"],
//   ["X","O","X","O"],
//   ["O","X","O","X"],
//   ["X","O","X","O"]
// ]

console.log(chessBoard(3,7))
// [
//   ["O","X","O","X","O","X","O"],
//   ["X","O","X","O","X","O","X"],
//   ["O","X","O","X","O","X","O"]
// ]