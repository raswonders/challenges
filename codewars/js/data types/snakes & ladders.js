function snakesAndLadders(board, dice, square = 0) {
  if (dice.length === 0) return square;
  
  if (square + dice[0] >= board.length) {
    return snakesAndLadders(board, dice.slice(1), square)
  } else {
    square += dice[0];
    square += board[square]
    return snakesAndLadders(board, dice.slice(1), square)  
  }
}

var dice = [2,1,5,1,5,4]
var board = [0,0,3,0,0,0,0,-2,0,0,0]
console.log(snakesAndLadders(board,dice))
// 10