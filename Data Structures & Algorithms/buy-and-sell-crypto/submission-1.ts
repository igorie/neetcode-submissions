class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0;
        let right = 1;
        let profit = 0;

        while (right < prices.length) {  
            let buy = prices[left];
            let sell = prices[right];

            if (buy < sell) {
                profit = Math.max(profit, sell - buy);
            } else {
                left = right;
            }
            right++;
        }

        return profit;
    }
}
