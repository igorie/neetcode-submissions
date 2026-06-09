class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = prices[0];
        let profit = 0;

        for (let sell of prices) {
            profit = Math.max(profit, sell-buy);
            buy = Math.min(buy, sell)
        }

        return profit;
    }
}
