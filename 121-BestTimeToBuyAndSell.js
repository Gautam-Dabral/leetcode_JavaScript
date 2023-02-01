
var maxProfit = function(prices) {
    let l = 0, r = 1, maxProfit = 0;
    while (r < prices.length){
        if (prices[r] > prices[l]){
            if (prices[r] - prices[l] > maxProfit){
                maxProfit = prices[r]-prices[l];
            }
        } else {
            l = r;
        }
        r += 1;
    }
    return maxProfit;
};

const prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));