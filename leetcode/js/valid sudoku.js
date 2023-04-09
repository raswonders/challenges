function isValidSudoku(board) {  
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    if (!isValidSudokuPart(row)) return false
  }

  for (let i = 0; i < board.length; i++) {
    let col = [];
    for (let j = 0; j < board.length; j++) {
      col.push(board[j][i])
    }    
    if (!isValidSudokuPart(col)) return false;
  }

  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      square = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          square.push(board[k][l]);
        }
      }
      if (!isValidSudokuPart(square)) return false;
    }
  }

  return true;
};

function isValidSudokuPart(arr) {
  arr = arr.slice().filter(item => item !== ".")

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1 || arr[i] > 9) return false;
  }

  if (Array.from(new Set(arr)).length !== arr.length) return false; 
  return true;
}

const test1 = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const test2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(test1))
// true
console.log(isValidSudoku(test2))
// false 