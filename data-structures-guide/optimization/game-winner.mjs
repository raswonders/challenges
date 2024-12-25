/* 
  Finds out which player has won
  O(2^N)

  @param {number} coins - number of coins left 
  @param {string} player - player which has turn
  @returns {string} - player which has won

*/
function gameWinner(coins, player) {
  if (coins <= 0) {
    return player;
  }

  const nextPlayer = player === "me" ? "them" : "me";
  if (
    gameWinner(coins - 1, nextPlayer) === "me" ||
    gameWinner(coins - 2, nextPlayer) === "me"
  ) {
    return "me";
  } else {
    return "them";
  }
}

// O(1)
function gameWinnerOptimized(coins, player) {
  if (coins - (1 % 3) === 0) {
    return "me";
  } else {
    return "them";
  }
}

console.log(gameWinnerOptimized(567, "me"));
