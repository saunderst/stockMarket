const ORIGINAL_INDEX = 0, VALUE = 1;

function findMaxProfit(prices) {
  const LOWEST = 0, HIGHEST = prices.length - 1;
  // did we fail to find anything?
  if (prices.length === 0)
    return -1;
  // were the lowest and highest values in the desired order?
  else if (prices[LOWEST][ORIGINAL_INDEX] < prices[HIGHEST][ORIGINAL_INDEX]) {
    // if so, we've found our max profit
    return prices[HIGHEST][VALUE] - prices[LOWEST][VALUE];
  }
  else {
    // try two next-best options: without the lowest price, and without the highest price
    return Math.max(findMaxProfit(prices.slice(1)), findMaxProfit(prices.slice(0,-1)));
  }
}

function maxProfit(prices) {
  // get the data sorted, but tagged with numbers designating the original sequence
  pricesWithOriginalIndexes = Object.entries(prices);
  pricesWithOriginalIndexes.forEach(pair => {pair[ORIGINAL_INDEX] = Number(pair[ORIGINAL_INDEX])});
  pricesWithOriginalIndexes.sort((a,b) => a[VALUE] - b[VALUE]);

  return findMaxProfit(pricesWithOriginalIndexes);
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
