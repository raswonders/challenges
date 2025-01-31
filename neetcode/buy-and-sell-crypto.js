function maxProfit(prices) {
  let profit = 0;
  let runningProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    let daysDiff = prices[i] - prices[i - 1];
    runningProfit = Math.max(runningProfit + daysDiff, 0);
    profit = runningProfit > profit ? runningProfit : profit;
  }
  return profit;
}

// 6
console.log(maxProfit([10, 1, 5, 6, 7, 1]));

// 0
console.log(maxProfit([10, 8, 7, 5, 2]));
