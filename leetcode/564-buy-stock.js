var assert = require("assert");
function maxProfit(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length -1; i++) {
    let price = prices[i];
    let next = prices[i+1];
    if (next - price > 0) {
      profit += next - price;
    }
  }
  return profit;
}
console.log("start")
assert.equal(maxProfit([7,1,5,3,6,4]), 7);
assert.equal(maxProfit([1,2,3,4,5]), 4);
assert.equal(maxProfit([7,6,4,3,1]), 0);
console.log("done!")
