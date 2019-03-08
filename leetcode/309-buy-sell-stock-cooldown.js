/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }
    var sell = 0;
    var buy = -prices[0]
    var prev_sell = 0;
    var prev_buy = 0;
    for (var i = 0; i < prices.length; i++) {
        console.log("----------------------------")
        var price = prices[i]
        console.log("price: ", price)
        prev_buy = buy
        console.log("prev buy: ", prev_buy)
        console.log("prev_sell:", prev_sell)
        console.log("price: ", price)
        buy = Math.max(prev_sell - price, prev_buy)
        console.log("buy: ", buy)
        prev_sell = sell
        console.log("prev sell: ", prev_sell)
        console.log("prev_buy: ", prev_buy)
        console.log("price: ", price)
        sell = Math.max(prev_buy + price, prev_sell)
        console.log("sell: ", sell)
    }
    return sell
};


const prices = [1,2,3,0,2]
console.log(maxProfit(prices))